import Image from 'next/image'
import ProjectSlider from './ProjectSlider'

const projects = [
  {
    title: 'Aqiqah Invitation — Kaysan',
    description:
      "A heartfelt digital invitation for a newborn baby boy's Islamic naming ceremony (Aqiqah). Features a live countdown timer, photo gallery, bilingual content (Indonesian/Arabic), and Google Maps integration for event location.",
    tags: ['HTML', 'CSS', 'JavaScript', 'Google Maps'],
    live: 'https://aqiqah-eight.vercel.app/',
    github: null,
    category: 'Web',
    screenshot: '/screenshots/aqiqah-kaysan.png',
  },
  {
    title: 'Aqiqah Invitation — Rea',
    description:
      "Digital celebration announcement for a newborn girl's Aqiqah ceremony. Includes Quranic verses, a live countdown timer, baby photo gallery, and an event details page with location map.",
    tags: ['HTML', 'CSS', 'JavaScript', 'Google Maps'],
    live: 'https://aqiqah-rea.vercel.app/',
    github: null,
    category: 'Web',
    screenshot: '/screenshots/aqiqah-rea.png',
  },
  {
    title: 'Kapuas Silica',
    description:
      'Corporate website for an Indonesian integrated mining and distribution company. Covers commodity trading from Kalimantan, LPG distribution as an official Pertamina partner, and resource-based manufacturing.',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
    live: 'https://rizkygin-kapuas-silcia.vercel.app/',
    github: null,
    category: 'Corporate',
    screenshot: '/screenshots/kapuas-silica.png',
  },
  {
    title: 'Math Game JS',
    description:
      'An interactive browser-based math game designed for 4th-grade students. Helps kids practice arithmetic in a fun, engaging way with game mechanics, sound effects, and progressive difficulty.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Game Dev'],
    live: null,
    github: 'https://github.com/rizkygin/math-gamejs',
    category: 'Game',
    screenshots: [
      '/screenshots/math-game/1.png',
      '/screenshots/math-game/2.png',
      '/screenshots/math-game/3.png',
      '/screenshots/math-game/4.png',
    ],
  },
  {
    title: 'AbsenKu',
    description:
      'A digital attendance system with face recognition, built with a React Native mobile app, a Node.js + Express + Prisma API, and a Python FastAPI face-recognition service. Includes admin dashboard, real-time attendance logs, and reporting.',
    tags: ['React Native', 'Node.js', 'Express', 'Prisma', 'FastAPI', 'Face Recognition'],
    live: null,
    github: null,
    category: 'Mobile',
    screenshots: [
      '/screenshots/absenkku/1.png',
      '/screenshots/absenkku/2.png',
      '/screenshots/absenkku/3.png',
      '/screenshots/absenkku/4.png',
    ],
    forSale: {
      price: 'Call for a Demo',
      note: 'One-time license · price negotiable based on scale & needs',
    },
  },
]

const categoryColors: Record<string, string> = {
  Web: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Corporate: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Game: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Mobile: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-[#666] max-w-md mx-auto">
            A selection of things I&apos;ve built — web apps, corporate sites, games, and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover bg-card border border-[#1f1f1f] rounded-2xl overflow-hidden flex flex-col"
            >
              {project.screenshots ? (
                <ProjectSlider images={project.screenshots} alt={project.title} />
              ) : (
                <div className="relative w-full h-44 overflow-hidden bg-[#111]">
                  {project.screenshot ? (
                    <Image
                      src={project.screenshot}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#111]">
                      <span className="text-[#444] text-sm font-medium tracking-widest uppercase">{project.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 to-transparent" />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-semibold text-[#e5e5e5] text-lg leading-snug">{project.title}</h3>
                  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full border ${categoryColors[project.category]}`}
                    >
                      {project.category}
                    </span>
                    {project.forSale && (
                      <span className="text-xs px-2.5 py-1 rounded-full border text-pink-400 bg-pink-400/10 border-pink-400/20">
                        For Sale
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[#666] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-[#777] text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.forSale && (
                  <div className="flex items-center justify-between gap-3 mb-5 px-4 py-3 rounded-xl bg-pink-400/5 border border-pink-400/20">
                    <div>
                      <p className="text-[#e5e5e5] text-sm font-semibold">{project.forSale.price}</p>
                      <p className="text-[#666] text-xs mt-0.5">{project.forSale.note}</p>
                    </div>
                    <a
                      href="mailto:rizkygin@gmail.com?subject=Interested%20in%20AbsenKu"
                      className="flex-shrink-0 text-sm text-pink-400 hover:text-white border border-pink-400/30 hover:border-pink-400 hover:bg-pink-400/10 px-4 py-2 rounded-lg transition-all"
                    >
                      Make an Offer
                    </a>
                  </div>
                )}

                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-accent hover:text-white border border-accent/30 hover:border-accent hover:bg-accent/10 px-4 py-2 rounded-lg transition-all"
                    >
                      Live Demo
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#888] hover:text-white border border-[#2a2a2a] hover:border-[#444] px-4 py-2 rounded-lg transition-all"
                    >
                      GitHub
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
