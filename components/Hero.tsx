'use client'

import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'Mobile Apps Engineer', 'AI Agent Builder', 'Anime & Mascot Illustrator']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1f1f1f] bg-card text-sm text-[#888] mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 animate-fade-up opacity-0-init">
          Hi, I&apos;m{' '}
          <span className="gradient-text">Rizky</span>
        </h1>

        <div className="h-12 flex items-center justify-center mb-6 animate-fade-up opacity-0-init delay-200">
          <span className="text-xl sm:text-2xl md:text-3xl text-[#888]">
            {displayed}
            <span className="animate-blink text-accent">|</span>
          </span>
        </div>

        <p className="max-w-xl mx-auto text-[#666] text-base sm:text-lg leading-relaxed mb-10 animate-fade-up opacity-0-init delay-300">
          I build web apps, mobile apps, and AI agents — and I draw anime & mascot illustrations on the side.
          Passionate about clean code, great UX, and shipping things that actually work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0-init delay-400">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-[#2a2a2a] hover:border-accent text-[#888] hover:text-white font-medium transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <svg className="w-5 h-5 text-[#444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
