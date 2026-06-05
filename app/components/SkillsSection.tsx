'use client'

interface SkillType {
  id: number
  icon: string
  title: string
  description: string
  level: string
  proficiency: number
  delay: string
}

const skills: SkillType[] = [
  {
    id: 1,
    icon: 'ph-cpu',
    title: 'Systems Programming',
    description: 'C, Rust, and low-level memory optimization for high-frequency trading engines and node software.',
    level: 'EXPERT',
    proficiency: 95,
    delay: ''
  },
  {
    id: 2,
    icon: 'ph-python-logo',
    title: 'DeFi Analytics',
    description: 'Python-based data pipelines, MEV analysis, and liquidity pool optimization algorithms.',
    level: 'INTERMEDIATE',
    proficiency: 92,
    delay: 'delay-100'
  },
  {
    id: 3,
    icon: 'ph-js-logo',
    title: 'TypeScript & React',
    description: 'Building responsive, real-time frontend interfaces for complex DeFi protocols and dashboards.',
    level: 'PROFICIENT',
    proficiency: 98,
    delay: 'delay-200'
  },
  {
    id: 4,
    icon: 'ph-hexagon',
    title: 'Smart Contracts',
    description: 'Solidity, audit-resistant patterns, and privacy-preserving contract architectures (Aztec, Fhenix).',
    level: 'INTERMEDIATE',
    proficiency: 85,
    delay: ''
  },
  {
    id: 5,
    icon: 'ph-shield-check',
    title: 'Privacy Layers',
    description: 'Implementation of ZK-proofs, selective disclosure, and confidential transactions.',
    level: 'INTERMEDIATE',
    proficiency: 80,
    delay: 'delay-100'
  },
  {
    id: 6,
    icon: 'ph-paint-brush',
    title: 'Creative Coding',
    description: 'Generative art, interactive WebGL experiences, and NFT minting mechanics.',
    level: 'PROFICIENT',
    proficiency: 75,
    delay: 'delay-200'
  }
]

const SkillCard = ({ skill }: { skill: SkillType }) => (
  <div className={`glass p-6 rounded-2xl hover:bg-white transition-all duration-300 group reveal spotlight-card ${skill.delay} border border-white shadow-sm hover:shadow-lg hover:-translate-y-1 water-btn bg-white`}>
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-xl bg-gray-100 text-textDark group-hover:scale-110 transition-transform">
        <i className={`ph ${skill.icon} text-2xl`}></i>
      </div>
      <span className="text-xs font-mono text-textMed border border-gray-200 px-2 py-1 rounded-full bg-gray-50">
        {skill.level}
      </span>
    </div>
    <h3 className="text-xl font-bold text-textDark mb-2">{skill.title}</h3>
    <p className="text-textMed text-sm mb-4">{skill.description}</p>
    <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
      <div 
        className="bg-textDark h-full rounded-full" 
        style={{ width: `${skill.proficiency}%` }}
      ></div>
    </div>
  </div>
)

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-textDark mb-2">Technical Arsenal</h2>
          <p className="text-textMed">Deep expertise across the full Web3 stack.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  )
}
