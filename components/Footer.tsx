export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#444] text-sm">
          © {new Date().getFullYear()} Rizky. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/rizkygin" target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-accent transition-colors text-sm">
            GitHub
          </a>
          <a href="https://linkedin.com/in/rizkygin" target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-accent transition-colors text-sm">
            LinkedIn
          </a>
          <a href="mailto:rizkygin@gmail.com" className="text-[#444] hover:text-accent transition-colors text-sm">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
