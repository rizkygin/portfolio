const skillGroups = [
  {
    category: 'Frontend',
    icon: '🖥',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML & CSS', 'Redux'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'REST API', 'GraphQL', 'Python', 'Go'],
  },
  {
    category: 'Mobile',
    icon: '📱',
    skills: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android', 'App Store Deploy'],
  },
  {
    category: 'AI Agents',
    icon: '🤖',
    skills: ['LangChain', 'Ollama', 'Local LLMs', 'OpenAI API', 'Claude API', 'n8n', 'Server Deployment', 'RAG'],
  },
  {
    category: 'Database & DevOps',
    icon: '🛠',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'CI/CD', 'Vercel', 'AWS', 'Firebase'],
  },
  {
    category: 'Design & Illustration',
    icon: '🎨',
    skills: ['Anime Illustration', 'Mascot Design', 'Character Design', 'Figma', 'Adobe Illustrator', 'Clip Studio Paint', 'UI/UX'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            My Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="mt-4 text-[#666] max-w-md mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-hover bg-card border border-[#1f1f1f] rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-[#e5e5e5]">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-[#888] text-xs hover:border-accent hover:text-accent transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
