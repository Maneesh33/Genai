"use client"

import { useState, useEffect } from "react"

export function NewProjectSlot() {
  const [isHovered, setIsHovered] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showContacts, setShowContacts] = useState(false)
  const fullText = "Tap to work with us"

  useEffect(() => {
    if (isHovered) {
      setDisplayedText("")
      setIsTypingComplete(false)
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setIsTypingComplete(true)
        }
      }, 60)
      return () => clearInterval(interval)
    } else {
      setDisplayedText("")
      setIsTypingComplete(false)
    }
  }, [isHovered])

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowContacts(true)}
    >
      <div
        className="relative w-[288px] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ perspective: "1200px" }}
      >
        <div
          className="absolute inset-0 z-20 flex items-start justify-center px-6 pt-12 transition-opacity duration-300 pointer-events-none"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <p
            className="text-sm text-white/50 font-mono text-center"
            style={{
              lineHeight: "20px",
            }}
          >
            {displayedText}
            {isHovered && (
              <span
                className="inline-block w-[2px] h-[14px] bg-white/50 ml-0.5"
                style={{
                  verticalAlign: "text-bottom",
                  animation: isTypingComplete ? "blink 1s step-end infinite" : "none",
                }}
              />
            )}
          </p>
        </div>

        <style jsx>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>

        <div
          className="relative z-0 rounded-2xl transition-all duration-500"
          style={{
            height: "224px",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
            transform: isHovered ? "rotateX(15deg)" : "rotateX(0deg)",
            background: "#1e1e1e",
            border: "1px dashed rgba(255, 255, 255, 0.06)",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 right-0 z-10 rounded-2xl overflow-hidden transition-all duration-500"
          style={{
            background: "rgba(26, 26, 26, 0.8)",
            border: "1px dashed rgba(255, 255, 255, 0.06)",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
            transform: isHovered ? "rotateX(-25deg)" : "rotateX(0deg)",
          }}
        >
          <div className="relative py-4 px-4">
            <h3 className="font-semibold text-white/70 text-base leading-snug line-clamp-2 min-h-[2.75rem] transition-colors duration-300 group-hover:text-white">
              Your Project
            </h3>
          </div>
          <div className="relative h-[48px]">
            <div className="absolute inset-x-0 top-0 h-[1px] border-t border-dashed border-white/[0.04]" />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              {showContacts ? (
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:contact@lumiai.in"
                    className="flex items-center gap-1.5 text-[13px] text-white/80 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5a.75.75 0 01.75.75v12a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-12a.75.75 0 01.75-.75zm0 0l8.25 6.375L20.25 5.25"
                      />
                    </svg>
                    <span>Email</span>
                  </a>
                  <a
                    href="https://wa.me/916301962520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[13px] text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.04 2.01C6.59 1.99 2.17 6.35 2.19 11.79c.01 2.08.67 4 1.8 5.6L2 22l4.75-1.95c1.55.85 3.32 1.3 5.17 1.31h.02c5.45 0 9.87-4.36 9.85-9.8-.01-2.62-1.04-5.08-2.89-6.92-1.86-1.85-4.33-2.88-6.86-2.88h-.01zm5.62 14.1c-.24.68-1.2 1.29-1.68 1.32-.43.04-.98.06-1.59-.1-.37-.1-.85-.27-1.47-.53-2.58-1.12-4.25-3.74-4.38-3.92-.13-.18-1.05-1.4-1.05-2.67 0-1.27.66-1.9.89-2.17.24-.26.53-.33.71-.33h.51c.16 0 .38-.06.59.45.22.53.75 1.84.82 1.98.06.13.1.29.02.47-.08.18-.13.29-.26.45-.13.16-.27.36-.39.49-.13.13-.27.27-.12.52.16.26.7 1.14 1.5 1.85 1.03.92 1.9 1.21 2.18 1.34.27.13.43.11.59-.06.16-.18.69-.8.88-1.08.18-.29.37-.24.63-.14.26.1 1.64.78 1.92.93.29.15.48.22.55.35.07.13.07.74-.17 1.42z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              ) : (
                <span className="text-[13px] text-white/40 transition-colors duration-300 group-hover:text-white/60">
                  Tap to work with us
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
