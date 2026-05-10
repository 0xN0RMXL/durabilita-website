import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, Play, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"

type MediaItem = {
  id: number
  src: string
  thumb: string
  type: "image" | "video"
  label: string
  category: string
}

const mediaItems: MediaItem[] = [
  // Product shots
  { id: 1,  src: "/Assets/main image.png",    thumb: "/Assets/main image.png",    type: "image", label: "Hero Product Shot",        category: "Product" },
  { id: 2,  src: "/Assets/1..png",            thumb: "/Assets/1..png",            type: "image", label: "Capsule Close-Up",         category: "Product" },
  { id: 3,  src: "/Assets/2.png",             thumb: "/Assets/2.png",             type: "image", label: "Product Lifestyle",        category: "Product" },
  { id: 4,  src: "/Assets/3.png",             thumb: "/Assets/3.png",             type: "image", label: "Studio Product",           category: "Product" },
  { id: 5,  src: "/Assets/5.png",             thumb: "/Assets/5.png",             type: "image", label: "Clinical Setting",         category: "Product" },
  // DNA / Science
  { id: 7,  src: "/Assets/pomelli_bdna_image_0509.png",    thumb: "/Assets/pomelli_bdna_image_0509.png",    type: "image", label: "Neural Blueprint 01",   category: "Science" },
  { id: 8,  src: "/Assets/pomelli_bdna_image_0509 (1).png", thumb: "/Assets/pomelli_bdna_image_0509 (1).png", type: "image", label: "Neural Blueprint 02",  category: "Science" },
  { id: 9,  src: "/Assets/pomelli_bdna_image_0509 (2).png", thumb: "/Assets/pomelli_bdna_image_0509 (2).png", type: "image", label: "Neural Blueprint 03",  category: "Science" },
  { id: 10, src: "/Assets/pomelli_bdna_image_0509 (3).png", thumb: "/Assets/pomelli_bdna_image_0509 (3).png", type: "image", label: "Neural Blueprint 04",  category: "Science" },

  // Creative 4:5
  { id: 11, src: "/Assets/pomelli_creative_image_4_5_0509.png",    thumb: "/Assets/pomelli_creative_image_4_5_0509.png",    type: "image", label: "Creative Portrait 01",    category: "Creative" },
  { id: 12, src: "/Assets/pomelli_creative_image_4_5_0509 (1).png", thumb: "/Assets/pomelli_creative_image_4_5_0509 (1).png", type: "image", label: "Creative Portrait 02",   category: "Creative" },
  { id: 13, src: "/Assets/pomelli_creative_image_4_5_0509 (2).png", thumb: "/Assets/pomelli_creative_image_4_5_0509 (2).png", type: "image", label: "Creative Portrait 03",   category: "Creative" },

  // Videos
  { id: 14, src: "/Assets/6.mp4", thumb: "/Assets/main image.png", type: "video", label: "Product Animation", category: "Video" },
  { id: 15, src: "/Assets/7.mp4", thumb: "/Assets/1..png",         type: "video", label: "Lifestyle Reel",    category: "Video" },
]


const categories = ["All", "Product", "Science", "Creative", "Video"]


export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null)

  const filtered = activeCategory === "All"
    ? mediaItems
    : mediaItems.filter(m => m.category === activeCategory)

  const lightboxIndex = lightboxItem ? filtered.findIndex(m => m.id === lightboxItem.id) : -1

  const goNext = () => {
    if (lightboxIndex < filtered.length - 1) setLightboxItem(filtered[lightboxIndex + 1])
  }
  const goPrev = () => {
    if (lightboxIndex > 0) setLightboxItem(filtered[lightboxIndex - 1])
  }

  return (
    <div className="pt-16 pb-32 bg-clinical-white min-h-screen">

      {/* ── Hero header ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neural-orange/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-deep-neural-gray/5 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-[1px] bg-neural-orange" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neural-orange">Visual Archive</span>
            <span className="w-8 h-[1px] bg-neural-orange" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-light tracking-tighter text-graphite-black mb-6"
          >
            The Durabilita{" "}
            <span className="italic font-serif text-deep-neural-gray">Gallery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-deep-neural-gray max-w-xl mx-auto leading-relaxed"
          >
            A curated collection of product photography, scientific visuals, and cinematic campaign content.
          </motion.p>
        </div>
      </section>

      {/* ── Category filters ── */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map(cat => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-graphite-black text-white border-graphite-black scale-105"
                  : "bg-white text-deep-neural-gray border-medical-gray/40 hover:border-graphite-black hover:text-graphite-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── Responsive grid ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                id={`gallery-item-${item.id}`}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-medical-gray/20 bg-white dark:bg-dark-neural hover:shadow-2xl transition-shadow duration-500"
                onClick={() => setLightboxItem(item)}
              >
                {/* Thumbnail */}
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-graphite-black/0 group-hover:bg-graphite-black/40 transition-colors duration-300 flex flex-col items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    {item.type === "video"
                      ? <Play className="w-10 h-10 text-white drop-shadow-lg" fill="white" />
                      : <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                    }
                    <span className="text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full bg-white/80 backdrop-blur-sm text-graphite-black border border-medical-gray/30">
                    {item.category}
                  </span>
                </div>

                {item.type === "video" && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full bg-neural-orange text-white">
                      Video
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            id="gallery-lightbox"
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-graphite-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={(e) => { if (e.target === e.currentTarget) setLightboxItem(null) }}
          >
            {/* Close */}
            <button
              id="gallery-lightbox-close"
              onClick={() => setLightboxItem(null)}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            {lightboxIndex > 0 && (
              <button
                id="gallery-lightbox-prev"
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next */}
            {lightboxIndex < filtered.length - 1 && (
              <button
                id="gallery-lightbox-next"
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Media */}
            <motion.div
              key={lightboxItem.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4"
            >
              {lightboxItem.type === "image" ? (
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.label}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                />
              ) : (
                <video
                  src={lightboxItem.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
                />
              )}
              <div className="flex items-center gap-4">
                <span className="text-white/40 text-xs font-bold tracking-widest uppercase">{lightboxItem.category}</span>
                <span className="w-4 h-[1px] bg-white/20" />
                <span className="text-white text-sm font-semibold">{lightboxItem.label}</span>
                <span className="w-4 h-[1px] bg-white/20" />
                <span className="text-white/40 text-xs">{lightboxIndex + 1} / {filtered.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
