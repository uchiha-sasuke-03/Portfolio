import { personalInfo } from '../data/portfolioData'
import SectionCharacter from './SectionCharacter'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-3xl">
          <h2 className="section-heading">About My Shinobi Way</h2>
          <div className="neo-card p-8 sm:p-10 relative overflow-hidden bg-white">
            <p className="font-body text-text-main text-lg leading-relaxed relative z-10 pl-6 border-l-4 border-leaf-green font-bold">
              {personalInfo.summary}
            </p>
          </div>
        </div>
        
        {/* Kakashi represents Experience & About */}
        <SectionCharacter 
          imagePath="/kakashi_about_character_1778512431034.png" 
          name="Kakashi Hatake" 
          side="right"
          className="top-[60%]"
        />
      </div>
    </section>
  )
}
