import { Award, ShieldCheck } from 'lucide-react'
import { certifications } from '../data/portfolioData'
import SectionCharacter from './SectionCharacter'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden bg-[#fff8e1]">
      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-4xl relative z-10">
          <h2 className="section-heading">Shinobi Masteries (Certifications)</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="neo-card p-5 flex items-start gap-4 hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white"
              >
                <div className="w-12 h-12 border-2 border-black bg-akatsuki-red flex items-center justify-center shrink-0 shadow-[3px_3px_0px_#000]">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-black uppercase tracking-tight leading-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <ShieldCheck size={14} className="text-rasengan-blue" />
                    <p className="text-naruto-orange font-accent text-sm">{cert.issuer}</p>
                  </div>
                  <p className="text-text-main text-xs mt-2 font-medium bg-[#f0f0f0] inline-block px-2 py-0.5 border border-black italic">
                    {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Itachi represents Mastery & Precision */}
        <SectionCharacter 
          imagePath="/itachi_certifications_character_1778513378127.png" 
          name="Itachi Uchiha" 
          side="right"
          className="top-[50%]"
        />
      </div>
    </section>
  )
}
