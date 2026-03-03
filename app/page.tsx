"use client"

import { useState, useEffect, useMemo, useRef, useCallback } from "react"
import confetti from "canvas-confetti"
import { projects as initialProjects, type Project } from "@/lib/data"
import { ProjectFolder } from "@/components/project-folder"
import { Toaster, toast } from "sonner"
import { FullpageLoader } from "@/components/fullpage-loader"
import { useGeneration } from "@/contexts/generation-context"
import { motion } from "framer-motion"
import { NewProjectSlot } from "@/components/new-project-slot"
import { FileManager } from "@/components/file-manager"
import { UGCManager } from "@/components/ugc-manager"
import { AvatarManager } from "@/components/avatar-manager"
const PROJECT_CONFIGS = [
  {
    title: "How to Design a Fashion Brand",
    clipCount: 6,
    images: [
      "/newbrand-portrait-1.png",
      "/newbrand-portrait-2.png",
      "/newbrand-portrait-3.png",
      "/newbrand-portrait-4.png",
      "/newbrand-portrait-5.png",
    ],
  },
  {
    title: "Starting a Modern Company in New York",
    clipCount: 8,
    images: [
      "/brand-portrait-1.png",
      "/brand-portrait-2.png",
      "/brand-portrait-3.png",
      "/brand-portrait-4.png",
      "/brand-portrait-5.png",
    ],
  },
]

export default function ClipsPage() {
  const { startGeneration } = useGeneration()

  const [isLoading, setIsLoading] = useState(true)
  const [newProjects, setNewProjects] = useState<(Project & { isNew?: boolean; isVisible?: boolean })[]>([])
  const [projects, setProjects] = useState(initialProjects)
  const nextProjectIndexRef = useRef(0)
  const animatingRef = useRef(false)
  const [showContent, setShowContent] = useState(false)
  const [fileManagerOpen, setFileManagerOpen] = useState(false)
  const [ugcManagerOpen, setUgcManagerOpen] = useState(false)
  const [avatarManagerOpen, setAvatarManagerOpen] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hasNewInvisible = newProjects.some((p) => p.isNew && !p.isVisible)
    if (hasNewInvisible && !animatingRef.current) {
      animatingRef.current = true
      const timer = setTimeout(() => {
        setNewProjects((prev) => prev.map((p) => (p.isNew && !p.isVisible ? { ...p, isVisible: true } : p)))
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [newProjects])

  useEffect(() => {
    const hasVisibleNew = newProjects.some((p) => p.isNew && p.isVisible)
    if (hasVisibleNew) {
      const timer = setTimeout(() => {
        setNewProjects((prev) => prev.map((p) => ({ ...p, isNew: false })))
        animatingRef.current = false
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [newProjects])

  const allProjects = useMemo(() => {
    return [...newProjects, ...projects]
  }, [newProjects, projects])

  const handleCreateProject = useCallback(() => {
    const timestamp = Date.now()
    const configIndex = nextProjectIndexRef.current
    const config = PROJECT_CONFIGS[configIndex]

    nextProjectIndexRef.current = (configIndex + 1) % PROJECT_CONFIGS.length

    const newProject: Project & { isNew: boolean; isVisible?: boolean } = {
      id: `new-project-${timestamp}`,
      title: config.title,
      clipCount: config.clipCount,
      images: config.images,
      isGenerating: true,
      progress: 0,
      isNew: true,
      isVisible: false,
      createdAt: new Date().toISOString(),
    }

    setNewProjects((prev) => [newProject, ...prev])

    startGeneration(newProject.id, () => {
      setNewProjects((prev) => prev.map((p) => (String(p.id) === newProject.id ? { ...p, isGenerating: false } : p)))
    })
  }, [startGeneration])

  const handleRemoveFolder = useCallback((projectId: string) => {
    // Remove immediately - the exit animation is already handled in DefaultProject
    setNewProjects((prev) => prev.filter((p) => String(p.id) !== projectId))
    setProjects((prev) => prev.filter((p) => String(p.id) !== projectId))
  }, [])

  const handleFolderClick = useCallback((projectId?: string) => {
    // Open file manager for AI Product Photography (id: "5")
    if (projectId === "5") {
      setFileManagerOpen(true)
    }
    // Open UGC manager for AI UGC Automation Engine (id: "1")
    if (projectId === "1") {
      setUgcManagerOpen(true)
    }
    // Open Avatar manager for Consistent AI Avatar System (id: "2")
    if (projectId === "2") {
      setAvatarManagerOpen(true)
    }
    // Open ComfyUI pipelines PDF for ComfyUI Advanced Pipeline (id: "4")
    if (projectId === "4") {
      window.open("/comfyui.pdf", "_blank")
    }
    // Shake animation is handled in ProjectFolder component
  }, [])

  const handleRenameProject = useCallback((projectId: string, newTitle: string) => {
    setNewProjects((prev) =>
      prev.map((p) => (String(p.id) === projectId ? { ...p, title: newTitle } : p))
    )
    setProjects((prev) =>
      prev.map((p) => (String(p.id) === projectId ? { ...p, title: newTitle } : p))
    )
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (isLoading) {
    return <FullpageLoader duration={2000} />
  }

  return (
    <div className="min-h-screen bg-[#191919]">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1A1A1A",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            color: "#fff",
            borderRadius: "12px",
          },
        }}
      />

      <div
        className="transition-all duration-700 ease-out"
        style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
        }}
      >
        <main ref={mainRef} className="flex-1 min-h-screen p-4 pt-12 sm:p-6 sm:pt-14 md:p-8 md:pt-16">
          <div className="mx-auto w-full max-w-[288px] sm:max-w-[600px] lg:max-w-[912px]">
            <div className="flex items-center justify-between h-12 mb-6">
              <h1 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                Made by Humans Scaled by AI
              </h1>
              <a
                href="https://www.instagram.com/lumi.ai_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-black rounded-full hover:bg-white/90 transition-colors py-1.5 bg-card-foreground px-3 whitespace-nowrap"
              >
                Instagram
              </a>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05, ease: [0.32, 0.72, 0, 1] }}
              >
                <NewProjectSlot />
              </motion.div>
              {allProjects.map((project, idx) => {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.25,
                      delay: Math.min(idx * 0.03, 0.3),
                      ease: [0.32, 0.72, 0, 1],
                      layout: { duration: 0.25, ease: [0.32, 0.72, 0, 1] },
                    }}
                  >
                    <ProjectFolder
                      project={project}
                      index={idx}
                      onRemove={() => handleRemoveFolder(String(project.id))}
                      onCancel={() => handleRemoveFolder(String(project.id))}
                      onClick={() => handleFolderClick(String(project.id))}
                      onRename={(newTitle) => handleRenameProject(String(project.id), newTitle)}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </main>
      </div>

      <FileManager isOpen={fileManagerOpen} onClose={() => setFileManagerOpen(false)} />
      <UGCManager isOpen={ugcManagerOpen} onClose={() => setUgcManagerOpen(false)} />
      <AvatarManager isOpen={avatarManagerOpen} onClose={() => setAvatarManagerOpen(false)} />
    </div>
  )
}
