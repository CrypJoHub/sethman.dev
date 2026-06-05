'use client'

interface Project {
  id: number
  title: string
  description: string
  icon: string
  status: string
  statusIcon: string
  tags: string[]
  primaryButton: { text: string; url: string; icon: string }
  delay: string
  gradientFrom: string
  gradientTo: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Arc Silver',
    description: 'A high-performance web application showcasing modern frontend architecture with real-time data visualization and seamless user interactions.',
    icon: 'ph-sparkle',
    status: 'LIVE',
    statusIcon: 'ph-check-circle',
    tags: ['TypeScript', 'React', 'Performance'],
    primaryButton: { text: 'View Project', url: 'https://arcsilver.vercel.app', icon: 'ph-arrow-up-right' },
    delay: '',
    gradientFrom: 'from-[#000000]/10',
    gradientTo: 'to-[#6B7280]/10'
  },
  {
    id: 2,
    title: 'Fhenix Privacy Layer',
    description: 'Confidential DeFi primitives using confidential EVM technology. Implemented private order books and hidden pool mechanics.',
    icon: 'ph-lock-key',
    status: 'RESEARCH',
    statusIcon: 'ph-flask',
    tags: ['Solidity', 'ZK-Proofs', 'Rust'],
    primaryButton: { text: 'Read Whitepaper', url: 'https://www.fhenix.io', icon: 'ph-arrow-up-right' },
    delay: 'delay-100',
    gradientFrom: 'from-[#6B7280]/10',
    gradientTo: 'to-[#000000]/10'
  }
]

const ProjectCard = ({ project }: { project: Project }) => (
  <div className={`group relative reveal spotlight-card ${project.delay}`}>
    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    <div className="relative glass rounded-3xl overflow-hidden border border-white hover:border-gray-200 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl bg-white">
      <div className="h-48 bg-[#F5F5F7] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F5F5F7] to-[#E8E8EA]">
          <i className={`ph ${project.icon} text-6xl text-textMed group-hover:scale-110 transition-transform duration-500`}></i>
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white backdrop-blur text-xs font-bold text-textDark border border-gray-200 shadow-sm">
          {project.status}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-textDark mb-2 group-hover:text-textMed transition-colors">
          {project.title}
        </h3>
        <p className="text-textMed mb-6 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 rounded-lg bg-gray-100 text-textDark text-xs border border-gray-200">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a 
            href={project.primaryButton.url} 
            className="water-btn inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-bold rounded-full z-10"
          >
            {project.primaryButton.text} <i className={`ph ${project.primaryButton.icon}`}></i>
          </a>
          <a href="#" className="text-sm font-bold text-textMed hover:text-textDark flex items-center gap-2 transition-colors px-4 py-2 rounded-full hover:bg-gray-100">
            <i className="ph ph-github-logo"></i> Code
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16 reveal">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-textDark mb-4">Featured Projects</h2>
        <p className="text-textMed max-w-2xl">A selection of high-impact systems I&apos;ve architected, from institutional DeFi tools to privacy research implementations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center reveal">
        <a 
          href="https://github.com/crypjohub" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-textDark hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 font-medium shadow-sm water-btn"
        >
          <i className="ph ph-github-logo text-xl"></i> View More on GitHub
        </a>
      </div>
    </section>
  )
}
