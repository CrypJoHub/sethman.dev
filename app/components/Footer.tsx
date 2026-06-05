'use client'

const socialLinks = [
  { icon: 'ph-twitter-logo', url: 'https://x.com/gregory_festus', label: 'Twitter' },
  { icon: 'ph-github-logo', url: 'https://github.com/crypjohub', label: 'GitHub' },
  { icon: 'ph-linkedin-logo', url: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { icon: 'ph-discord-logo', url: 'https://discord.gg/crypjo', label: 'Discord' }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 border-t border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div 
            className="logo-text text-2xl cursor-pointer"
            onClick={scrollToTop}
          >
            Sethman<span className="text-textMed text-lg">.Dev</span>
          </div>
          <div className="text-textMed text-sm">
            © 2026 Sethman. All rights reserved. Built with precision.
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="water-btn w-10 h-10 rounded-full flex items-center justify-center text-textMed hover:text-textDark transition-colors bg-gray-50"
              >
                <i className={`ph ${link.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
