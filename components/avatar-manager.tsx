"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface AvatarImage {
  name: string
  url: string
}

const avatarImages: AvatarImage[] = [
  // B-series
  { name: "MANEESH", url: "/B1.png" },
  { name: "MANEESH", url: "/B2.png" },
  { name: "MANEESH", url: "/B3.png" },
  { name: "MANEESH", url: "/B4.png" },
  { name: "MANEESH", url: "/B5.png" },
  // M-series
  { name: "MANEESH", url: "/M1.png" },
  { name: "MANEESH", url: "/M2.png" },
  { name: "MANEESH", url: "/M3.png" },
  { name: "MANEESH", url: "/M4.png" },
  { name: "MANEESH", url: "/M5.png" },
  { name: "MANEESH", url: "/M6.png" },
  { name: "MANEESH", url: "/M7.png" },
  { name: "MANEESH", url: "/M8.png" },
  { name: "MANEESH", url: "/M9.png" },
]

interface AvatarManagerProps {
  isOpen: boolean
  onClose: () => void
}

export function AvatarManager({ isOpen, onClose }: AvatarManagerProps) {
  const [selectedImage, setSelectedImage] = useState<AvatarImage | null>(null)

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
            <div className="w-[220px] bg-[#141414] border-r border-white/[0.06] flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-4 border-b border-white/[0.06]">
                <h2 className="text-sm font-semibold text-foreground tracking-tight">Consistent AI Avatar</h2>
                <button
                  onClick={onClose}
                  className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="px-4 py-3 border-t border-white/[0.06] mt-auto">
                <div className="text-[11px] text-muted-foreground/60">
                  {avatarImages.length} reference images for MANEESH
                </div>
              </div>
            </div>

            <div className="w-[520px] sm:w-[580px] md:w-[640px] bg-[#191919] flex flex-col h-full">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-foreground">MANEESH – Consistent Avatar</h3>
                  <p className="text-[11px] text-muted-foreground">Tap any card to preview with a smooth rotation</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {avatarImages.map((image, idx) => (
                    <motion.button
                      key={image.url + idx}
                      whileHover={{ rotateX: 8, rotateY: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-[#101010] border border-white/[0.06] shadow-[0_18px_45px_rgba(0,0,0,0.65)] cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-2.5 flex items-center justify-between">
                        <span className="text-[11px] font-semibold tracking-wide text-white/90">
                          {image.name}
                        </span>
                        <span className="text-[10px] text-white/70 bg-white/10 rounded-full px-2 py-0.5">
                          Tap to preview
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preview Card with rotation animation */}
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
                  className="relative max-w-[90vw] max-h-[90vh] rounded-2xl bg-[#121212] border border-white/[0.1] shadow-[0_30px_120px_rgba(0,0,0,0.9)] overflow-hidden flex items-center justify-center"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.name}
                    className="max-w-full max-h-[86vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div>
                      <p className="text-sm font-semibold text-white">{selectedImage.name}</p>
                      <p className="text-[11px] text-muted-foreground/80">Consistent AI avatar reference</p>
                    </div>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="w-8 h-8 rounded-full bg-[#1e1e1e] border border-white/[0.15] flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-[#2a2a2a] transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}

