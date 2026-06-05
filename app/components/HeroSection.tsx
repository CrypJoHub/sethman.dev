'use client'

import { useEffect, useState } from 'react'
import Avatar from './Avatar'

const SkillCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="glass p-4 rounded-2xl border border-white hover:border-gray-200 transition-all duration-300 group cursor-pointer bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg">
    <i className={`ph ${icon} text-3xl text-textDark mb-2 group-hover:scale-110 transition-transform`}></i>
    <div className="text-2xl font-bold text-textDark">{title}</div>
    <div className="text-xs text-textMed">{description}</div>
  </div>
)

export default function HeroSection() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className={`space-y-8 reveal ${isActive ? 'active' : ''}`}>
          <div className="greeter-card rounded-3xl p-5 shadow-lg max-w-lg">
            <div className="flex items-center gap-4">
              <Avatar />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-textDark text-xs font-semibold border border-black/10 mb-2">
                  <span className="w-2 h-2 rounded-full bg-textDark animate-pulse"></span>
                  Welcome
                </div>
                <h2 className="text-xl font-display font-bold text-textDark">Hi, I&apos;m Sethman.</h2>
                <p className="text-sm text-textMed">
                  Building secure, high-performance Web3 infrastructure with clarity and speed.
                </p>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-white text-sm text-textDark font-medium shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-textDark opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-textDark"></span>
            </span>
            Available for Web3 & DeFi Collaboration
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] text-textDark">
            Engineering <br/>
            <span className="text-gradient">Decentralized</span><br/>
            Futures.
          </h1>

          <p className="text-lg lg:text-xl text-textMed max-w-lg leading-relaxed">
            High-performance systems architect specializing in <strong className="text-textDark">DeFi liquidity aggregation</strong>, privacy layers, and mission-critical blockchain infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              onClick={handleSmoothScroll}
              className="water-btn group relative px-8 py-4 bg-accent text-white rounded-full font-bold flex items-center gap-2 z-10"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <i className="ph ph-arrow-right"></i>
              </span>
            </a>
            <a 
              href="#contact" 
              onClick={handleSmoothScroll}
              className="water-btn px-8 py-4 bg-white border border-white text-textDark rounded-full font-medium hover:bg-gray-50 flex items-center gap-2 backdrop-blur-sm z-10"
            >
              <i className="ph ph-envelope-simple"></i> Contact Me
            </a>
          </div>
        </div>

        <div className={`hidden lg:block relative reveal ${isActive ? 'active' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/5 to-[#6B7280]/5 rounded-3xl blur-3xl"></div>
          <div className="relative glass rounded-3xl p-8 border border-white backdrop-blur-xl shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <SkillCard icon="ph-cpu" title="C / Rust" description="Systems Core" />
                <SkillCard icon="ph-python-logo" title="Python" description="DeFi Analytics" />
              </div>
              <div className="space-y-4 pt-8">
                <SkillCard icon="ph-js-logo" title="TypeScript" description="Frontend & SDKs" />
                <SkillCard icon="ph-hexagon" title="Solidity" description="Smart Contracts" />
              </div>
            </div>
            <div className="mt-6 glass p-4 rounded-xl font-mono text-xs text-textMed overflow-hidden relative border border-white bg-white">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <i className="ph ph-code text-6xl text-textDark"></i>
              </div>
              <p className="text-textDark font-bold">{`// High-performance liquidity engine`}</p>
              <p>{`const aggregator = new `}<span className="text-textDark">SethmanDEX</span>{`({`}</p>
              <p className="pl-4">{`privacy: `}<span className="text-textMed">true</span>{`,`}</p>
              <p className="pl-4">{`latency: `}<span className="text-textDark">{`'<50ms'`}</span></p>
              <p>{`});`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
