'use client'

import { useEffect } from 'react'

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center px-6 py-4 rounded-2xl bg-white border border-white shadow-sm water-btn cursor-default">
    <div className="text-3xl font-bold text-textDark">{number}</div>
    <div className="text-xs text-textMed uppercase tracking-wider mt-1">{label}</div>
  </div>
)

export default function AboutSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass rounded-3xl p-8 lg:p-12 reveal spotlight-card group border border-white shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-1 bg-textDark rounded-full"></div>
            <h2 className="text-2xl font-display font-bold text-textDark">About Sethman</h2>
          </div>
          <p className="text-textDark text-lg leading-relaxed mb-6">
            I architect <strong className="text-textDark">high-throughput decentralized systems</strong> that power the next generation of finance. With a foundation in systems programming (C/Rust) and a deep understanding of cryptographic privacy layers, I bridge the gap between raw performance and seamless user experience.
          </p>
          <p className="text-textMed leading-relaxed mb-8">
            From building sub-50ms liquidity aggregation engines to researching epistemological frameworks for on-chain truth, my work sits at the intersection of <em>technology, privacy, and economic incentives</em>.
          </p>
          <div className="flex flex-wrap gap-4">
            <StatCard number="3+" label="Years DeFi" />
            <StatCard number="5+" label="Projects Shipped" />
            <StatCard number="0" label="Downtime" />
          </div>
        </div>

        <div className="glass rounded-3xl p-8 flex flex-col justify-center items-start relative overflow-hidden reveal delay-100 border border-white shadow-lg bg-white">
          <div className="absolute top-0 right-0 p-32 bg-black/5 blur-[100px] rounded-full"></div>
          <i className="ph ph-quotes text-4xl text-textMed/40 mb-6"></i>
          <p className="font-display text-xl lg:text-2xl font-bold text-textDark leading-tight mb-4">
            &quot;Code is not just logic; it&apos;s infrastructure for trust.&quot;
          </p>
          <p className="text-textMed text-sm">— Core Philosophy</p>
          
          <div className="mt-8 w-full pt-8 border-t border-textMed/10">
            <div className="text-xs text-textMed uppercase tracking-widest mb-2">Currently Focused On</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-black/5 text-textDark text-xs border border-black/10">Zero-Knowledge Proofs</span>
              <span className="px-3 py-1 rounded-full bg-black/5 text-textDark text-xs border border-black/10">MEV Extraction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
