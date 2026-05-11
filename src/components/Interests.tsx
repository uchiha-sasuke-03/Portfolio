import {
  Gamepad2, Film, Cpu, BookOpen, Plane, ShieldCheck, Zap
} from 'lucide-react'
import { hobbies } from '../data/portfolioData'
import SectionCharacter from './SectionCharacter'

const hobbyIcons = [Gamepad2, Film, Cpu, BookOpen, Plane, ShieldCheck]

export default function Interests() {
  return (
    <section id="interests" className="py-24 px-6 relative overflow-hidden bg-[#fff4e0]">
      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-4xl relative z-10">
          <h2 className="section-heading">Personal Nindo (Interests)</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {hobbies.map((hobby, i) => {
              const Icon = hobbyIcons[i] ?? Cpu
              return (
                <div
                  key={i}
                  className="neo-card p-6 text-center hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 bg-white"
                >
                  <div className="w-14 h-14 mx-auto mb-4 border-2 border-black bg-pop-yellow flex items-center justify-center shadow-[3px_3px_0px_#000]">
                    <Icon size={28} className="text-black" />
                  </div>
                  <p className="font-body text-black text-lg font-bold uppercase tracking-tight">{hobby}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Madara Uchiha represents Power & Ambition */}
        <SectionCharacter 
          imagePath="/madara_uchiha_character.png"
          name="Madara Uchiha" 
          side="right"
          className="top-[40%]"
        />
      </div>
    </section>
  )
}
