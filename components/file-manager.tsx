"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface Folder {
  name: string
  icon: string
  count: number
  images: string[]
}

const folders: Folder[] = [
  {
    name: "Fashion",
    icon: "fashion",
    count: 27,
    images: [
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/6fashion_photography_mid_2k_202602101026.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/_photograph_closeup_2k_202602102237.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/_photograph_highangle_2k_202602102237.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_campaign_portrait_2k_202602211659.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_editorial_full_2k_202602211659.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_editorial_photograph_2k_2026022116%20(1).jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_editorial_photograph_2k_2026022116.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_photography_closeup_2k_202602101.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_photography_closeup_2k_2026021209.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_photography_extreme_2k_20260212090.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_photography_fullbody_2k_20260210.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_photography_lowangle_2k_20260212.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_photography_lowangle_2k_202602120%20(1).jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_photography_lowangle_2k_202602120.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Fashion_photography_mid_2k_202602101026.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/IMG-20260213-WA0018.jpg.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/IMG-20260213-WA0019.jpg.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/IMG-20260213-WA0020.jpg.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/IMG-20260213-WA0021.jpg.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/IMG-20260213-WA0022.jpg.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/IMG-20260213-WA0023.jpg.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/IMG-20260213-WA0024.jpg.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/IMG-20260213-WA0025.jpg.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Photograph_eyelevel__2k_202602211647.jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Photograph_eyelevel_young_2k_20260210%20(1).jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Photograph_lowangle_mediumfull_2k_20260%20(1).jpeg",
      "https://qmtkeovuqaxfpgbocafo.supabase.co/storage/v1/object/public/fashion%20images/Photograph_lowangle_mediumfull_2k_20260.jpeg",
    ],
  },
  {
    name: "Beauty",
    icon: "beauty",
    count: 0,
    images: [],
  },
  {
    name: "Jewelry",
    icon: "jewelry",
    count: 0,
    images: [],
  },
  {
    name: "Food & Beverage",
    icon: "food",
    count: 0,
    images: [],
  },
  {
    name: "Electronics",
    icon: "electronics",
    count: 0,
    images: [],
  },
  {
    name: "Home & Decor",
    icon: "home",
    count: 0,
    images: [],
  },
  {
    name: "Fitness",
    icon: "fitness",
    count: 0,
    images: [],
  },
]

function FolderIcon({ type, isActive }: { type: string; isActive: boolean }) {
  const color = isActive ? "text-foreground" : "text-muted-foreground"
  switch (type) {
    case "fashion":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      )
    case "beauty":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    case "jewelry":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      )
    case "food":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 10-.53 0L12 3.375l.265-.265z" />
        </svg>
      )
    case "electronics":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    case "home":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    case "fitness":
      return (
        <svg className={`w-4 h-4 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    default:
      return null
  }
}

interface FileManagerProps {
  isOpen: boolean
  onClose: () => void
}

export function FileManager({ isOpen, onClose }: FileManagerProps) {
  const [activeFolder, setActiveFolder] = useState("Fashion")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const currentFolder = folders.find((f) => f.name === activeFolder)
  const currentImages = currentFolder?.images || []

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
                <h2 className="text-sm font-semibold text-foreground tracking-tight">Product Photography</h2>
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
                        <span className="flex-1 text-left">{folder.name}</span>
                        <span
                          className={`text-[11px] tabular-nums ${
                            isActive ? "text-foreground/60" : "text-muted-foreground/50"
                          }`}
                        >
                          {folder.images.length > 0 ? folder.images.length : "--"}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </nav>

              <div className="px-4 py-3 border-t border-white/[0.06]">
                <div className="text-[11px] text-muted-foreground/50">
                  {folders.reduce((acc, f) => acc + f.images.length, 0)} total assets
                </div>
              </div>
            </div>

            {/* Main Content - Image Grid */}
            <div className="w-[520px] sm:w-[580px] md:w-[640px] bg-[#191919] flex flex-col h-full">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center">
                    <FolderIcon type={currentFolder?.icon || "fashion"} isActive />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{activeFolder}</h3>
                    <p className="text-[11px] text-muted-foreground">
                      {currentImages.length > 0
                        ? `${currentImages.length} images`
                        : "No images yet"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {currentImages.length > 0 ? (
                  <div className="grid grid-cols-3 gap-3">
                    {currentImages.map((url, idx) => (
                      <motion.div
                        key={url}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.25,
                          delay: Math.min(idx * 0.03, 0.4),
                          ease: [0.32, 0.72, 0, 1],
                        }}
                        className="group/img relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer bg-[#1e1e1e]"
                        onClick={() => setSelectedImage(url)}
                      >
                        <img
                          src={url}
                          alt={`${activeFolder} photo ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                          loading="lazy"
                          crossOrigin="anonymous"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-200" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                          <span className="text-[10px] text-foreground/80 font-medium bg-black/50 backdrop-blur-sm rounded px-1.5 py-0.5">
                            {idx + 1} / {currentImages.length}
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
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V9.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">No images yet</p>
                      <p className="text-[12px] text-muted-foreground/50 mt-0.5">
                        This folder is empty. Upload or generate images to get started.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  className="relative max-w-[80vw] max-h-[85vh]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage}
                    alt="Full size preview"
                    className="max-w-full max-h-[85vh] object-contain rounded-xl"
                    crossOrigin="anonymous"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
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
