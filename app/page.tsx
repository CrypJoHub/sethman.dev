'use client'

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="bg-bg text-textDark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between px-8 md:px-16 lg:px-20 pt-32 pb-20">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-2xl">
          {/* Greeting Card */}
          <div className="mb-12 greeter-card rounded-3xl p-6 w-fit">
            <div className="flex items-start gap-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-100 to-amber-200 flex items-end justify-center overflow-hidden">
                  <div className="w-16 h-12 bg-black rounded-t-2xl flex items-start justify-between px-2 pt-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-[blink_5s_infinite]"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-[blink_5s_infinite_0.2s]"></div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 text-3xl waving-hand">👋</div>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-white border border-black/10 rounded-full px-3 py-1 mb-3">
                  <span className="text-xs font-semibold">Welcome</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Hi, I&apos;m Sethman.</h2>
                <p className="text-sm text-textMed">Building secure, high-performance Web3 infrastructure with clarity and speed.</p>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="mb-8 inline-flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="text-sm font-medium">Available for Web3 & DeFi Collaboration</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Engineering<br />Decentralized<br />Futures.
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-textMed mb-2 max-w-xl">
            High-performance systems architect specializing in{' '}
            <span className="font-semibold text-textDark">DeFi liquidity aggregation</span>, privacy layers, and mission-critical blockchain infrastructure.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button className="water-btn px-6 py-3 bg-textDark text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              View Projects <i className="ph ph-arrow-right"></i>
            </button>
            <button className="px-6 py-3 bg-white border border-black/20 text-textDark font-semibold rounded-full hover:bg-black/5 transition-colors flex items-center gap-2">
              <i className="ph ph-envelope"></i> Contact Me
            </button>
          </div>
        </div>

        {/* Right Column - Skills & Code */}
        <div className="hidden lg:flex w-1/2 flex-col gap-8 pl-8">
          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl border border-white hover:border-textMed/30 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3">
                <i className="ph ph-code text-2xl text-textDark"></i>
              </div>
              <h3 className="font-bold text-lg mb-1">C / Rust</h3>
              <p className="text-sm text-textMed">Systems Core</p>
            </div>

            <div className="glass p-6 rounded-2xl border border-white hover:border-textMed/30 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3">
                <i className="ph ph-brackets-square text-2xl text-textDark"></i>
              </div>
              <h3 className="font-bold text-lg mb-1">TypeScript</h3>
              <p className="text-sm text-textMed">Frontend & SDK's</p>
            </div>

            <div className="glass p-6 rounded-2xl border border-white hover:border-textMed/30 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3">
                <i className="ph ph-snake text-2xl text-textDark"></i>
              </div>
              <h3 className="font-bold text-lg mb-1">Python</h3>
              <p className="text-sm text-textMed">DeFi Analytics</p>
            </div>

            <div className="glass p-6 rounded-2xl border border-white hover:border-textMed/30 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3">
                <i className="ph ph-shield text-2xl text-textDark"></i>
              </div>
              <h3 className="font-bold text-lg mb-1">Solidity</h3>
              <p className="text-sm text-textMed">Smart Contracts</p>
            </div>
          </div>

          {/* Code Snippet */}
          <div className="glass p-6 rounded-2xl border border-white overflow-hidden relative">
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
      </section>
    </main>
  )
}
