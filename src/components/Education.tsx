import {
  BookOpen
} from 'lucide-react'
import { education } from '../data/portfolioData'
import SectionCharacter from './SectionCharacter'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-end">
          <div className="max-w-4xl relative z-10">
            <h2 className="section-heading">Shinobi Academy Path (Education)</h2>

            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-[4px] bg-black shadow-[2px_0px_0px_var(--color-akatsuki-red)]" />

              <div className="space-y-12">
                {education.map((item, i) => (
                  <div key={i} className="relative pl-14 group">
                    <div className="absolute left-[11px] top-2 w-5 h-5 rounded-full border-4 border-black bg-white group-hover:bg-akatsuki-red transition-colors duration-300 z-10" />

                    <div className="neo-card p-6 bg-white hover:translate-x-1 transition-transform duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                        <span className="bg-akatsuki-red text-white font-heading px-3 py-1 text-sm border-2 border-black shadow-[2px_2px_0px_#000]">
                          {item.year}
                        </span>
                        <h3 className="text-black font-heading font-bold text-2xl uppercase tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mb-2 text-naruto-orange font-accent text-lg">
                        <BookOpen size={18} />
                        <p>{item.institution}</p>
                      </div>
                      <p className="font-body text-text-main text-base leading-relaxed font-bold">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Jiraiya on the LEFT for balance */}
        <SectionCharacter 
          imagePath="/jiraiya_education_character_1778512632911.png" 
          name="Jiraiya (Pervy Sage)" 
          side="left"
          className="top-[40%]"
        />
      </div>
    </section>
  )
}
