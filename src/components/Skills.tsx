import { technicalSkills } from '../data/portfolioData'
import SectionCharacter from './SectionCharacter'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-4xl relative z-10">
          <h2 className="section-heading">Elite Ninja Arts (Skills)</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((cat) => (
              <div
                key={cat.category}
                className="neo-card p-6 group hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200"
              >
                <h3 className="font-heading text-lg font-bold text-naruto-orange uppercase tracking-wider mb-4 border-b-2 border-black pb-2">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-bold border-2 border-black bg-[#f0f0f0] shadow-[2px_2px_0px_#000] hover:bg-pop-yellow transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sasuke represents Skill & Talent */}
        <SectionCharacter 
          imagePath="/sasuke_skills_character_1778512246852.png" 
          name="Sasuke Uchiha" 
          side="right"
          className="top-[50%]"
        />
      </div>
    </section>
  )
}
