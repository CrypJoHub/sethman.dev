'use client'

interface ContactInfo {
  id: number
  icon: string
  label: string
  value: string
  href?: string
}

const contactInfo: ContactInfo[] = [
  {
    id: 1,
    icon: 'ph-envelope-simple',
    label: 'Email',
    value: 'sethman.mon@gmail.com',
    href: 'mailto:sethman.mon@gmail.com'
  },
  {
    id: 2,
    icon: 'ph-globe',
    label: 'Location',
    value: 'Distributed / Remote'
  },
  {
    id: 3,
    icon: 'ph-calendar-check',
    label: 'Availability',
    value: 'Always Open'
  }
]

const socialLinks = [
  { icon: 'ph-github-logo', url: 'https://github.com/crypjohub', label: 'GitHub' },
  { icon: 'ph-twitter-logo', url: 'https://x.com/gregory_festus', label: 'Twitter' },
  { icon: 'ph-linkedin-logo', url: 'https://www.linkedin.com/', label: 'LinkedIn' }
]

const ContactCard = ({ info }: { info: ContactInfo }) => (
  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all duration-300 spotlight-card water-btn">
    <div className="w-10 h-10 rounded-full bg-gray-100 text-textDark flex items-center justify-center mb-4">
      <i className={`ph ${info.icon} text-xl`}></i>
    </div>
    <div className="text-sm text-textMed mb-1">{info.label}</div>
    {info.href ? (
      <a href={info.href} className="text-textDark font-medium hover:text-accent transition-colors">
        {info.value}
      </a>
    ) : (
      <div className="text-textDark font-medium">{info.value}</div>
    )}
  </div>
)

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass rounded-3xl p-8 lg:p-16 border border-white relative overflow-hidden reveal shadow-xl bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#000000]/5 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-textDark mb-6">Let&apos;s Build Together.</h2>
          <p className="text-textMed text-lg mb-10">
            I am currently available for high-performance DeFi, privacy layer integrations, and systems architecture consulting. <br className="hidden sm:block" />
            <span className="text-textDark font-bold mt-2 inline-block">Typical response time: &lt; 24 hours.</span>
          </p>
          
          <div className="mb-12">
            <a 
              href="mailto:sethman.mon@gmail.com" 
              className="water-btn inline-flex items-center gap-3 px-10 py-5 bg-accent text-white rounded-full font-bold text-lg relative z-10 hover:shadow-lg transition-shadow"
            >
              <i className="ph ph-envelope-simple-open text-2xl"></i> Contact Me Directly
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {contactInfo.map((info) => (
              <ContactCard key={info.id} info={info} />
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center gap-8">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="water-btn w-12 h-12 rounded-full flex items-center justify-center text-textMed hover:text-textDark transition-colors bg-gray-50 border border-gray-100"
              >
                <i className={`ph ${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
