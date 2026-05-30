'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">
          rizky.dev
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#888] hover:text-[#e5e5e5] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors duration-200"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-[#888] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#1f1f1f] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[#888] hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
