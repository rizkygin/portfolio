const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '10+', label: 'Happy Clients' },
  { value: '5+', label: 'Apps Shipped' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Crafting digital experiences
              <span className="gradient-text"> that stand out</span>
            </h2>
            <div className="space-y-4 text-[#888] leading-relaxed">
              <p>
                I&apos;m Rizky — a Full Stack Developer, Mobile Apps Engineer, AI Agent builder,
                and Illustrator. I love creating things that are fast, beautiful, and genuinely useful.
              </p>
              <p>
                On the web and mobile side, I work with React, Next.js, React Native, and Flutter.
                I also build and deploy AI agents — both locally with tools like Ollama and LangChain,
                and on hosted server machines — automating workflows and building intelligent systems.
              </p>
              <p>
                Beyond code, I do anime-style and mascot illustration. Whether it&apos;s a brand character,
                a game asset, or a digital portrait, I bring the same attention to detail that I apply
                to my engineering work.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
              >
                Let&apos;s Work Together
              </a>
              <a
                href="/cv.pdf"
                className="px-6 py-3 rounded-xl border border-[#2a2a2a] hover:border-accent text-[#888] hover:text-white text-sm font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-hover bg-card border border-[#1f1f1f] rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{s.value}</div>
                <div className="text-[#666] text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
