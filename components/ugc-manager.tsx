"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface Video {
  name: string
  url: string
}

interface Folder {
  name: string
  icon: string
  count: number
  videos: Video[]
}

const folders: Folder[] = [
  {
    name: "Product promotion videos",
    icon: "product",
    count: 1,
    videos: [
      {
        name: "6f3dcd6d6fd1f9ed5702b50c35c44d54",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6f3dcd6d6fd1f9ed5702b50c35c44d54_720w-NZZv6iE1BVA39SmxqaZF7OI4N2lpY3.mp4",
      },
    ],
  },
  {
    name: "Application promotion videos",
    icon: "app",
    count: 1,
    videos: [
      {
        name: "AVATAR",
        url: "/AVATAR.mp4",
      },
    ],
  },
  {
    name: "Gen-ai videos",
    icon: "ai",
    count: 2,
    videos: [
      {
        name: "Eating banana",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eating%20banana-x5dHV9yO7XZttsmPPMK9QDCiUE2DfG.mp4",
      },
      {
        name: "SNAKE",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SNAKE-9nn1NHT4M8AyEvu0uyDqrVxY5OMnzx.mp4",
      },
    ],
  },
  {
    name: "Fashion promotion videos",
    icon: "fashion",
    count: 3,
    videos: [
      {
        name: "fashion1",
        url: "/fashion1.mov",
      },
      {
        name: "fashion2",
        url: "/fashion2.mov",
      },
      {
        name: "fashion3",
        url: "/fashion3.mov",
      },
    ],
  },
  {
    name: "Content automation",
    icon: "ai",
    count: 2,
    videos: [
      {
        name: "REEL1",
        url: "/REEL1.mp4",
      },
      {
        name: "REEL2",
        url: "/REEL2.mp4",
      },
    ],
  },
]

function FolderIcon({ type, isActive }: { type: string; isActive: boolean }) {
  const color = isActive ? "text-foreground" : "text-muted-foreground"
  switch (type) {
    case "product":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    case "app":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    case "ai":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    case "fashion":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      )
    default:
      return null
  }
}

interface UGCManagerProps {
  isOpen: boolean
  onClose: () => void
}

export function UGCManager({ isOpen, onClose }: UGCManagerProps) {
  const [activeFolder, setActiveFolder] = useState("Product promotion videos")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const currentFolder = folders.find((f) => f.name === activeFolder)
  const currentVideos = currentFolder?.videos || []

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-[101] flex"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
          >
            {/* Sidebar - Folder List */}
            <div className="w-[220px] bg-[#141414] border-r border-white/[0.06] flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-4 border-b border-white/[0.06]">
                <h2 className="text-sm font-semibold text-foreground tracking-tight">AI UGC Automation</h2>
                <button
                  onClick={onClose}
                  className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="px-2 pt-3 pb-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-2">
                  Folders
                </span>
              </div>

              <nav className="flex-1 overflow-y-auto px-2 pb-4">
                <div className="flex flex-col gap-0.5">
                  {folders.map((folder) => {
                    const isActive = folder.name === activeFolder
                    return (
                      <button
                        key={folder.name}
                        onClick={() => setActiveFolder(folder.name)}
                        className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                          isActive
                            ? "bg-white/[0.08] text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                        }`}
                      >
                        <FolderIcon type={folder.icon} isActive={isActive} />
                        <span className="flex-1 text-left truncate">{folder.name}</span>
                        <span
                          className={`text-[11px] tabular-nums ${
                            isActive ? "text-foreground/60" : "text-muted-foreground/50"
                          }`}
                        >
                          {folder.videos.length > 0 ? folder.videos.length : "--"}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </nav>

              <div className="px-4 py-3 border-t border-white/[0.06]">
                <div className="text-[11px] text-muted-foreground/50">
                  {folders.reduce((acc, f) => acc + f.videos.length, 0)} total videos
                </div>
              </div>
            </div>

            {/* Main Content - Video Grid */}
            <div className="w-[520px] sm:w-[580px] md:w-[640px] bg-[#191919] flex flex-col h-full">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center">
                    <FolderIcon type={currentFolder?.icon || "product"} isActive />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{activeFolder}</h3>
                    <p className="text-[11px] text-muted-foreground">
                      {currentVideos.length > 0
                        ? `${currentVideos.length} videos`
                        : "No videos yet"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {currentVideos.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {currentVideos.map((video, idx) => (
                      <motion.div
                        key={video.url}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.25,
                          delay: Math.min(idx * 0.03, 0.4),
                          ease: [0.32, 0.72, 0, 1],
                        }}
                        className="group/video relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer bg-[#1e1e1e]"
                        onClick={() => setSelectedVideo(video.url)}
                      >
                        <video
                          src={video.url}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/video:scale-105"
                          preload="metadata"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/video:bg-black/20 transition-colors duration-200" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity duration-200">
                          <svg
                            className="w-12 h-12 text-white drop-shadow-lg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover/video:opacity-100 transition-opacity duration-200">
                          <span className="text-[10px] text-foreground/80 font-medium bg-black/50 backdrop-blur-sm rounded px-1.5 py-0.5">
                            {video.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-muted-foreground/40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 006.11 2.1M12 6.042a8.968 8.968 0 015.89 3.942M12 6.042a8.968 8.968 0 018.969 8.958m-1.5 0A8.967 8.967 0 0012 20.958m0 0A8.968 8.968 0 013.042 15m15.958 0A8.968 8.968 0 0112 20.958m0 0a8.968 8.968 0 01-8.969-8.958m0 0A8.967 8.967 0 012.042 9m13.476 3.9l3.068-3.068m0 0a6 6 0 10-8.485 8.485m8.485-8.485L9.586 9.586m0 0A4.5 4.5 0 1015 12m-1.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">No videos yet</p>
                      <p className="text-[12px] text-muted-foreground/50 mt-0.5">
                        This folder is empty. Upload or generate videos to get started.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedVideo && (
              <motion.div
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedVideo(null)}
              >
                <motion.div
                  className="relative max-w-[80vw] max-h-[85vh]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <video
                    src={selectedVideo}
                    className="max-w-full max-h-[85vh] object-contain rounded-xl"
                    controls
                    autoPlay
                  />
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1e1e1e] border border-white/[0.1] flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-[#2a2a2a] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}
