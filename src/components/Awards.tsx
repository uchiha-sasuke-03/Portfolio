import { Trophy } from 'lucide-react'
import { awards } from '../data/portfolioData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Awards() {
  const { ref, isVisible, revealStyle } = useScrollReveal(0.15, 'scale')

  return (
    <section id="awards" className="py-24 px-6 relative">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 style={revealStyle} className="section-heading ">Awards & Achievements</h2>

        <div className="neo-card p-8 relative overflow-hidden texture-leather">
          {/* Corner rivets */}
          <div className="rivet top-3 left-3" />
          <div className="rivet top-3 right-3" />
          <div className="rivet bottom-3 left-3" />
          <div className="rivet bottom-3 right-3" />

          {/* Watermark trophy */}
          <div className="absolute -top-4 -right-4 opacity-[0.06] text-text-neo-dark">
            <Trophy size={140} strokeWidth={1} />
          </div>

          <ul className="space-y-4 relative z-10">
            {awards.map((award, i) => (
              <li
                key={i}
                className="flex gap-3 items-start text-text-neo"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.5s ease-out ${i * 120}ms`,
                }}
              >
                <span
                  className="mt-1.5 w-3 h-3 rounded-full shrink-0"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #e0c96b, #b5a642)',
                    boxShadow: '0 1px 2px rgba(59,40,20,0.25), 0 0.5px 0 rgba(255,255,255,0.4) inset',
                  }}
                />
                <span className="leading-relaxed">{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
