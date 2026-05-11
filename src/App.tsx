import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Certifications from './components/Certifications'
import LanguagesCompetencies from './components/LanguagesCompetencies'
import Interests from './components/Interests'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="min-h-screen text-text-neo relative">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Reveal animationLibrary="gsap"><About /></Reveal>
      <Reveal animationLibrary="gsap"><Education /></Reveal>
      <Reveal animationLibrary="gsap"><Skills /></Reveal>
      <Reveal animationLibrary="gsap"><Projects /></Reveal>
      <Reveal animationLibrary="gsap"><Awards /></Reveal>
      <Reveal animationLibrary="gsap"><Certifications /></Reveal>
      <Reveal animationLibrary="gsap"><LanguagesCompetencies /></Reveal>
      <Reveal animationLibrary="gsap"><Interests /></Reveal>
      <Footer />
    </div>
  )
}

export default App
