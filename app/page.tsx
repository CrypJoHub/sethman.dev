'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      if (window.scrollY > 50) {
        navbar?.classList.add('glass')
        navbar?.classList.add('shadow-lg')
      } else {
        navbar?.classList.remove('glass')
        navbar?.classList.remove('shadow-lg')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#000000]/5 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6B7280]/10 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#000000]/5 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      <nav className="fixed w-full z-50 top-0 transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer group" onClick={scrollToTop}>
              <span className="logo-text text-3xl">
                Sethman<span className="text-textMed text-2xl">.Dev</span>
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#about" className="nav-water text-textMed hover:text-textDark px-3 py-2 text-sm font-medium rounded-full">About</a>
                <a href="#skills" className="nav-water text-textMed hover:text-textDark px-3 py-2 text-sm font-medium rounded-full">Skills</a>
                <a href="#projects" className="nav-water text-textMed hover:text-textDark px-3 py-2 text-sm font-medium rounded-full">Projects</a>
                <a href="#contact" className="water-btn ml-4 px-6 py-2.5 bg-accent text-white text-sm font-bold relative z-10">Let&apos;s Talk</a>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button 
                type="button" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-textMed hover:text-textDark hover:bg-white/50 focus:outline-none transition-colors" 
                aria-label="Toggle Menu"
              >
                <i className="ph ph-list text-2xl"></i>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-bg/95 backdrop-blur-xl border-b border-[#000000]/10 shadow-lg`}>
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-textDark hover:bg-white/50 font-medium transition-colors">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-textDark hover:bg-white/50 font-medium transition-colors">Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-textDark hover:bg-white/50 font-medium transition-colors">Projects</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl bg-accent text-white font-bold text-center water-btn mt-4">Contact Me</a>
          </div>
        </div>
      </nav>

      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 reveal active">
            <div className="greeter-card rounded-3xl p-5 shadow-lg max-w-lg">
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0 avatar-wrap">
                  <div className="avatar">
                    <div className="hair"></div>
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                    <div className="mouth"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-white rounded-full px-2.5 py-0.5 mb-2">
                    <span className="text-xs font-semibold">Welcome</span>
                  </div>
                  <h2 className="text-2xl font-bold text-textDark">Hi, I&apos;m Sethman.</h2>
                  <p className="text-textMed text-sm mt-1">Building secure, high-performance Web3 infrastructure with clarity and speed.</p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2.5 border border-black/10 shadow-sm">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span className="text-sm font-medium">Available for Web3 & DeFi Collaboration</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-textDark">
              Engineering<br />Decentralized<br />Futures.
            </h1>

            <p className="text-base text-textMed leading-relaxed max-w-md">
              High-performance systems architect specializing in <span className="font-semibold text-textDark">DeFi liquidity aggregation</span>, privacy layers, and mission-critical blockchain infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="water-btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-textDark text-white text-sm font-bold rounded-full hover:bg-opacity-90 transition-all z-10">
                View Projects <i className="ph ph-arrow-right"></i>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-black/20 text-textDark text-sm font-semibold rounded-full hover:bg-black/5 transition-colors">
                <i className="ph ph-envelope-open"></i> Contact Me
              </a>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="group relative reveal spotlight-card">
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/10 to-[#6B7280]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl overflow-hidden border border-white hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <i className="ph ph-code text-2xl text-textDark"></i>
                </div>
                <h3 className="text-lg font-bold text-textDark mb-1">C / Rust</h3>
                <p className="text-xs text-textMed">Systems Core</p>
              </div>
            </div>

            <div className="group relative reveal spotlight-card">
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/10 to-[#6B7280]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl overflow-hidden border border-white hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <i className="ph ph-brackets-square text-2xl text-textDark"></i>
                </div>
                <h3 className="text-lg font-bold text-textDark mb-1">TypeScript</h3>
                <p className="text-xs text-textMed">Frontend & SDK&apos;s</p>
              </div>
            </div>

            <div className="group relative reveal spotlight-card">
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/10 to-[#6B7280]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl overflow-hidden border border-white hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <i className="ph ph-snake text-2xl text-textDark"></i>
                </div>
                <h3 className="text-lg font-bold text-textDark mb-1">Python</h3>
                <p className="text-xs text-textMed">DeFi Analytics</p>
              </div>
            </div>

            <div className="group relative reveal spotlight-card">
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/10 to-[#6B7280]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl overflow-hidden border border-white hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <i className="ph ph-shield text-2xl text-textDark"></i>
                </div>
                <h3 className="text-lg font-bold text-textDark mb-1">Solidity</h3>
                <p className="text-xs text-textMed">Smart Contracts</p>
              </div>
            </div>

            <div className="col-span-2 group relative reveal spotlight-card">
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/10 to-[#6B7280]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl overflow-hidden border border-white hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl bg-white p-6">
                <div className="absolute top-4 right-4 opacity-10">
                  <i className="ph ph-code text-5xl text-textDark"></i>
                </div>
                <div className="font-mono text-xs space-y-2 text-textMed">
                  <p className="text-textDark font-bold">{`// High-performance liquidity engine`}</p>
                  <p>{`const aggregator = new `}<span className="text-textDark">SethmanDEX</span>{`({`}</p>
                  <p className="pl-4">{`privacy: `}<span className="text-textDark">true</span>{`,`}</p>
                  <p className="pl-4">{`latency: `}<span className="text-textDark">{`'<50ms'`}</span></p>
                  <p>{`});`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
