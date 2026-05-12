import { Mail, ChevronDown, Zap, Sword, Scroll, Shield } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { personalInfo } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { useGsapScroll } from '../hooks/useGsapScroll';
import { AnimatedButton } from './AnimatedButton';
import * as anime from 'animejs';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

// Konoha Symbol (Hidden Leaf Village)
function KonohaSymbol({ className = "" }: { className?: string }) {
  return (
    <img 
      src="/hidden_leaf.png" 
      alt="Konoha" 
      className={`${className} object-contain w-14 h-14`} 
    />
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Decorative floating badge component with Pop Anime Style
const FloatingBadge = ({ icon: Icon, text, delay, position }: { icon: any, text: string, delay: number, position: string }) => (
  <motion.div 
    className={`absolute hidden lg:flex items-center gap-2 px-4 py-2 rounded-sm neo-card text-text-neo-dark text-sm font-bold ${position} border-2 border-black z-30`}
    initial={{ opacity: 0, x: -20, rotate: -5 }}
    animate={{ 
      opacity: [0, 1, 1],
      x: [-20, 0, 5, 0],
      rotate: [-5, 0, 2, 0]
    }}
    transition={{ 
      opacity: { duration: 0.5, delay },
      x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 },
      rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }
    }}
  >
    <Icon size={16} className="text-naruto-orange" />
    <span className="font-heading tracking-wider">{text}</span>
  </motion.div>
);

export default function Hero() {
  const typedRole = useTypewriter(personalInfo.roles);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Photo flip state: toggles between profile and Naruto every 5 seconds
  const [showNaruto, setShowNaruto] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNaruto(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax for the title section
  const parallaxRef = useGsapScroll({
    animation: (el) => gsap.to(el, { y: -100, opacity: 0.8, ease: 'none' }),
    scrub: true,
    start: 'top top',
    end: 'bottom top',
  });

  useEffect(() => {
    // Anime.js entrance animation with "Impact" feel
    const timeline = anime.default.timeline({
      easing: 'easeOutElastic(1, .6)',
      duration: 800,
    });

    timeline
      .add({
        targets: titleRef.current,
        scale: [0.5, 1],
        opacity: [0, 1],
        delay: 500,
      })
      .add({
        targets: subtitleRef.current,
        translateX: [-50, 0],
        opacity: [0, 1],
      }, '-=400')
      .add({
        targets: textRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
      }, '-=400')
      .add({
        targets: buttonsRef.current,
        scale: [0.9, 1],
        opacity: [0, 1],
      }, '-=400');
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 12 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 bg-[#fff4e0]"
    >
      {/* Speed Lines Overlay Background (CSS Only) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(0,0,0,0.1) 100px, rgba(0,0,0,0.1) 101px)',
        backgroundSize: '200% 200%',
        animation: 'speedLines 20s linear infinite'
      }} />

      {/* Floating Decorative Elements - REPOSITIONED to avoid overlapping name */}
      <FloatingBadge icon={Zap} text="CHIDORI SPEED" delay={0.2} position="top-[12%] left-[8%]" />
      <FloatingBadge icon={Sword} text="SHINOBI WAY" delay={0.5} position="bottom-[28%] left-[5%]" />
      <FloatingBadge icon={Scroll} text="JUTSU MASTER" delay={0.8} position="bottom-[12%] right-[8%]" />
      <FloatingBadge icon={Shield} text="WILL OF FIRE" delay={1.1} position="top-[12%] right-[8%]" />

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:pt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Photo Frame — flips between profile.jpg and Naruto every 5 seconds */}
        <motion.div variants={itemVariants} className="w-full md:w-5/12 flex justify-center md:justify-end relative md:mt-24">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 border-[6px] border-black shadow-[12px_12px_0px_#000] p-4 bg-white rotate-3 z-10">
             <div className="absolute -top-10 -left-10 w-16 h-16 sm:w-20 sm:h-20 text-naruto-orange-dark z-20">
               <KonohaSymbol className="w-full h-full rotate-[-15deg]" />
             </div>
             <div className="w-full h-full border-2 border-black overflow-hidden p-1 bg-[#f0f0f0] relative">
               {/* Animated photo flip */}
               <AnimatePresence mode="wait">
                 {!showNaruto ? (
                   <motion.img 
                     key="profile"
                     src="/profile.jpg" 
                     alt={personalInfo.name} 
                     className="w-full h-full object-cover absolute inset-0"
                     initial={{ rotateY: 90, opacity: 0 }}
                     animate={{ rotateY: 0, opacity: 1 }}
                     exit={{ rotateY: -90, opacity: 0 }}
                     transition={{ duration: 0.6, ease: "easeInOut" }}
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.src = `https://ui-avatars.com/api/?name=${personalInfo.name}&background=e0e5ec&color=4f46e5&size=512`;
                     }}
                   />
                 ) : (
                   <motion.img 
                     key="naruto"
                     src="/naruto_hero_character_1778512199444.png" 
                     alt="Naruto Uzumaki" 
                     className="w-full h-full object-contain absolute inset-0 bg-[#fff4e0] p-2"
                     initial={{ rotateY: 90, opacity: 0 }}
                     animate={{ rotateY: 0, opacity: 1 }}
                     exit={{ rotateY: -90, opacity: 0 }}
                     transition={{ duration: 0.6, ease: "easeInOut" }}
                   />
                 )}
               </AnimatePresence>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-pop-yellow border-2 border-black font-heading text-xl shadow-[4px_4px_0px_#000]">
              {showNaruto ? "NARUTO" : "SHINOBI"}
            </div>
          </div>
        </motion.div>

        {/* Text Content Section */}
        <div ref={parallaxRef as React.RefObject<HTMLDivElement>} className="w-full md:w-7/12 text-center md:text-left flex flex-col items-center md:items-start relative z-20">
          
          {/* Ninja Rank badge */}
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 bg-[#1a472a] text-[#ffeb3b] text-sm px-5 py-2 border-2 border-black shadow-[4px_4px_0px_#000]">
            <Zap size={14} className="text-pop-yellow fill-pop-yellow" />
            <span className="font-heading tracking-widest text-lg uppercase drop-shadow-[2px_2px_0px_#000]">Jonin Rank Developer</span>
          </motion.div>

          <h1 ref={titleRef} className="font-heading text-5xl sm:text-7xl lg:text-8xl mb-4 leading-none opacity-0">
            <span className="text-black text-[0.5em] sm:text-[0.6em] block mb-2 font-accent">Dattebayo! I'm</span>
            <span className="text-gradient block">
              {personalInfo.name}
            </span>
          </h1>

          <div ref={subtitleRef} className="h-auto min-h-[3.5rem] mb-8 flex items-center justify-center md:justify-start opacity-0">
            <span className="font-heading text-2xl sm:text-4xl text-shinobi-blue">
              {typedRole}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1.5 h-8 sm:h-10 bg-naruto-orange ml-2"
            />
          </div>

          <p ref={textRef} className="font-heading text-text-main text-base sm:text-lg max-w-xl mb-10 leading-relaxed opacity-0">
            Mastering the arts of <span className="text-naruto-orange-dark underline decoration-4">Full Stack Development</span> & <span className="text-rasengan-blue underline decoration-4">AI Jutsu</span>. 
            Protecting the digital world from vulnerabilities.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-16 opacity-0">
            <AnimatedButton
              href={`mailto:${personalInfo.email}`}
              variant="primary"
              className="scale-110"
            >
              <Mail size={20} />
              SEND SCROLL
            </AnimatedButton>
            <AnimatedButton
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <GithubIcon size={20} />
              CODE VAULT
            </AnimatedButton>
            <AnimatedButton
              href={`https://linkedin.com/in/${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <LinkedinIcon size={20} />
              LINKEDIN
            </AnimatedButton>
          </div>

          <motion.a
            variants={itemVariants}
            href="#about"
            className="inline-block text-black hover:text-naruto-orange transition-colors"
            animate={{ y: [0, 15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={48} strokeWidth={3} />
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
}
