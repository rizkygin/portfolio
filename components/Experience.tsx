const experiences = [
  {
    company: 'pos-app',
    role: 'Full Stack Developer',
    period: 'Present',
    current: true,
    description:
      'Currently building a modern Point of Sale (POS) system. Working on the full stack — from UI to backend services and database architecture — delivering a fast, reliable platform for business operations.',
    tags: ['Full Stack', 'POS System', 'React', 'Node.js'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/pos-app',
        icon: 'github',
      },
    ],
    color: 'bg-accent',
  },
  {
    company: 'Borneo Jek',
    role: 'Programmer',
    period: 'Former',
    current: false,
    description:
      'Built and maintained mobile and web applications for a Borneo-based ride-hailing platform. Developed the customer app, driver app, and core services — covering real-time tracking, order management, and user authentication across the ecosystem.',
    tags: ['Mobile App', 'React Native', 'Driver App', 'Customer App', 'Ride-hailing'],
    links: [
      {
        label: '@borneojek.id',
        href: 'https://www.instagram.com/borneojek.id/',
        icon: 'instagram',
      },
    ],
    color: 'bg-[#444]',
  },
  {
    company: 'LPP Enter Borneo',
    role: 'Web Programmer & Computer Instructor',
    period: '~3 Years',
    current: false,
    description:
      'Developed web applications and taught Microsoft Office and computer fundamentals to students at a vocational education and training center in Pangkalan Bun, Kalimantan. Covered web programming curriculum alongside hands-on office productivity training for students entering the workforce.',
    tags: ['Web Programming', 'Teaching', 'Microsoft Office', 'Computer Training', 'HTML/CSS', 'Vocational Education'],
    links: [
      {
        label: 'lkpenter.com',
        href: 'https://lkpenter.com',
        icon: 'web',
      },
      {
        label: '@info_enter',
        href: 'https://www.instagram.com/info_enter/',
        icon: 'instagram',
      },
    ],
    color: 'bg-orange-400',
  },
]

function WebIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Where I&apos;ve <span className="gradient-text">Worked</span>
          </h2>
          <p className="mt-4 text-[#666] max-w-md mx-auto">
            Companies and teams I&apos;ve built software for.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#1f1f1f] hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative sm:pl-16">
                <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-[#111] border-2 border-[#1f1f1f] items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${exp.color}`} />
                </div>

                <div className="card-hover bg-card border border-[#1f1f1f] rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-semibold text-[#e5e5e5]">{exp.company}</h3>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                        {!exp.current && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#555]">
                            Former
                          </span>
                        )}
                      </div>
                      <p className="text-accent text-sm font-medium">{exp.role}</p>
                    </div>
                    <span className="text-[#555] text-sm">{exp.period}</span>
                  </div>

                  <p className="text-[#666] text-sm leading-relaxed mb-5">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-[#777] text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {exp.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[#888] hover:text-white border border-[#2a2a2a] hover:border-[#444] px-4 py-2 rounded-lg transition-all"
                      >
                        {link.icon === 'github' ? <GitHubIcon /> : link.icon === 'instagram' ? <InstagramIcon /> : <WebIcon />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
