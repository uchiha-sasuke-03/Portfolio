import { Mail, Phone, MapPin, Heart, Zap } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 relative overflow-hidden bg-white border-t-8 border-black">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-black mb-4 uppercase tracking-tighter">
          Send a <span className="text-naruto-orange">Summoning Scroll</span>
        </h2>
        <p className="font-accent text-xl sm:text-2xl text-rasengan-blue mb-12">I'm always ready for a new mission!</p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <a
            href={`mailto:${personalInfo.email}`}
            className="framer-button framer-button-primary sm:scale-110"
          >
            <Mail size={18} />
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="framer-button framer-button-secondary"
          >
            <Phone size={18} />
            {personalInfo.phone}
          </a>
          <a
            href={`https://linkedin.com/in/${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="framer-button framer-button-secondary"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
          <div className="framer-button framer-button-secondary cursor-default">
            <MapPin size={18} />
            {personalInfo.location}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-1 w-20 bg-black" />
          <Zap size={24} className="text-pop-yellow fill-pop-yellow stroke-black stroke-2" />
          <div className="h-1 w-20 bg-black" />
        </div>

        <p className="font-body text-black text-lg font-bold flex items-center justify-center gap-2">
          Crafted with <Heart size={18} className="text-akatsuki-red fill-akatsuki-red" /> by {personalInfo.name} &copy; {new Date().getFullYear()}
        </p>
        <p className="font-heading text-xl mt-2 text-naruto-orange uppercase tracking-widest">Believe It!</p>
      </div>
    </footer>
  )
}
