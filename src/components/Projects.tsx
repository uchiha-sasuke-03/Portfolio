import { ExternalLink, Zap } from 'lucide-react'
import { projects } from '../data/portfolioData'
import SectionCharacter from './SectionCharacter'

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="neo-card p-6 group hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 bg-white">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-heading text-2xl font-bold text-black group-hover:text-naruto-orange transition-colors">
            {project.title}
          </h3>
          <p className="text-rasengan-blue text-sm font-accent tracking-wider">{project.subtitle}</p>
        </div>
        <ExternalLink
          size={20}
          className="text-black group-hover:text-naruto-orange transition-colors shrink-0"
        />
      </div>
      <ul className="space-y-3">
        {project.points.map((point, pi) => (
          <li key={pi} className="text-text-main text-sm leading-relaxed pl-6 relative font-bold">
            <Zap size={14} className="absolute left-0 top-[3px] text-pop-yellow fill-pop-yellow" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-[#fff4e0]">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-end">
          <div className="max-w-4xl relative z-10">
            <h2 className="section-heading">High-Speed Missions (Projects)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* Minato on the LEFT for balance */}
        <SectionCharacter 
          imagePath="/minato_projects_character_1778512462019.png" 
          name="Minato Namikaze" 
          side="left"
          className="top-[40%]"
        />
      </div>
    </section>
  )
}
