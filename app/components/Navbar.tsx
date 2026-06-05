'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
      isScrolled ? 'bg-bg/85 backdrop-blur-xl border-b border-gray-200 shadow-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex-shrink-0 cursor-pointer group logo-text text-3xl"
            onClick={scrollToTop}
          >
            Sethman<span className="text-textMed text-2xl">.Dev</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#about" className="nav-water text-textMed hover:text-textDark px-3 py-2 text-sm font-medium rounded-full">
                About
              </a>
              <a href="#skills" className="nav-water text-textMed hover:text-textDark px-3 py-2 text-sm font-medium rounded-full">
                Skills
              </a>
              <a href="#projects" className="nav-water text-textMed hover:text-textDark px-3 py-2 text-sm font-medium rounded-full">
                Projects
              </a>
              <a href="#contact" className="water-btn ml-4 px-6 py-2.5 bg-accent text-white text-sm font-bold relative z-10">
                Let's Talk
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-textMed hover:text-textDark hover:bg-white/50 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              <i className={`ph text-2xl transition-all ${mobileMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-[#000000]/10 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-textDark hover:bg-white/50 font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-textDark hover:bg-white/50 font-medium transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-textDark hover:bg-white/50 font-medium transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl bg-accent text-white font-bold text-center water-btn mt-4"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
