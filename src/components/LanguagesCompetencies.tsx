import { Globe, Sparkles } from 'lucide-react'
import { languages, competencies } from '../data/portfolioData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function LanguagesCompetencies() {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <section className="py-24 px-6 relative">
      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Languages */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
          transition: 'all 0.7s ease-out',
        }}>
          <h2 className="section-heading text-xl ">
            <Globe size={20} className="text-accent-primary" />
            Languages
          </h2>
          <div className="space-y-3">
            {languages.map((lang, i) => (
              <div
                key={lang.name}
                className="neo-card p-4 flex items-center justify-between hover:shadow-[0_4px_12px_rgba(59,40,20,0.15)] transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.5s ease-out ${200 + i * 100}ms`,
                }}
              >
                <span className="text-text-neo-dark font-heading font-semibold">{lang.name}</span>
                <span className="text-text-neo-light text-sm italic">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
          transition: 'all 0.7s ease-out 200ms',
        }}>
          <h2 className="section-heading text-xl ">
            <Sparkles size={20} className="text-accent-tertiary" />
            Core Competencies
          </h2>
          <div className="neo-card p-6 relative overflow-hidden ">
            <div className="rivet top-3 left-3" />
            <div className="rivet top-3 right-3" />
            <ul className="space-y-3 relative z-10">
              {competencies.map((comp, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-text-neo"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(15px)',
                    transition: `all 0.5s ease-out ${400 + i * 100}ms`,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, #e0c96b, #b5a642)',
                      boxShadow: '0 1px 1px rgba(59,40,20,0.2)',
                    }}
                  />
                  {comp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
