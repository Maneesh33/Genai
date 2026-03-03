export interface Project {
  id: string
  title: string
  clipCount: number
  createdAt: string
  images: string[]
  isGenerating?: boolean
  progress?: number
  eta?: string
  isFailed?: boolean
  clipLabel?: string
  dateLabel?: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI UGC Automation Engine",
    clipCount: 14,
    createdAt: "2024-10-20",
    images: [
      "/rain-portrait-1.png",
      "/rain-portrait-2.png",
      "/rain-portrait-3.png",
      "/rain-portrait-4.png",
      "/rain-portrait-5.png",
    ],
    clipLabel: "300+ Videos / Month",
    dateLabel: "85% Automated",
  },
  {
    id: "2",
    title: "Consistent AI Avatar System",
    clipCount: 6,
    createdAt: "2024-11-15",
    images: [
      "/random-portrait-2.png",
      "/random-portrait-1.png",
      "/random-portrait-3.png",
      "/random-portrait-5.png",
      "/random-portrait-4.png",
      
    ],
    clipLabel: "95% Consistency",
    dateLabel: "LoRA Trained",
  },
  {
    id: "4",
    title: "ComfyUI Advanced Pipeline",
    clipCount: 8,
    createdAt: "2024-10-25",
    images: [
      "/italy-portrait-1.png",
      "/italy-portrait-2.png",
      "/italy-portrait-3.png",
      "/italy-portrait-4.png",
      "/italy-portrait-5.png",
    ],
    clipLabel: "Tap to see",
    dateLabel: "Advanced R&D",
  },
  {
    id: "5",
    title: "AI Product Photography",
    clipCount: 8,
    createdAt: "2024-11-20",
    images: [
      "/cool-portrait-1.png",
      "/cool-portrait-2.png",
      "/cool-portrait-3.png",
      "/cool-portrait-4.png",
      "/cool-portrait-5.png",
    ],
    clipLabel: "4 Brand Shoots",
    dateLabel: "High-Detail Output",
  },
]
