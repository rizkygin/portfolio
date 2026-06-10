'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProjectSlider({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="relative w-full h-44 overflow-hidden bg-[#111] group/slider">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} screenshot ${i + 1}`}
          fill
          className={`object-cover object-top transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 to-transparent" />

      <button
        type="button"
        onClick={prev}
        aria-label="Previous screenshot"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/40 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/60"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next screenshot"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/40 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/60"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === index ? 'bg-white w-4' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
