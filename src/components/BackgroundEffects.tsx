import { motion } from 'framer-motion';
import { useGsapScroll } from '../hooks/useGsapScroll';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const narutoQuotes = [
  "I never go back on my word... my ninja way!",
  "Hard work is worthless if you don't believe.",
  "Change your destiny.",
  "Abandoning friends is worse than scum.",
  "Pain makes us try to be kind.",
  "Believe it!",
  "The Will of Fire.",
  "I'm going to be Hokage!",
  "A dropout will beat a genius through hard work."
];

// Floating Leaf Component
const KonohaLeaf = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-6 h-6 text-leaf-green opacity-40 pointer-events-none"
    initial={{ y: -50, x: Math.random() * 100 + '%', rotate: 0 }}
    animate={{ 
      y: '110vh',
      x: [null, (Math.random() - 0.5) * 200 + 'px'],
      rotate: 360 
    }}
    transition={{ 
      duration: 15 + Math.random() * 10,
      repeat: Infinity,
      delay,
      ease: "linear"
    }}
  >
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C12 2 3 7 3 12C3 17 12 22 12 22C12 22 21 17 21 12C21 7 12 2zM12 19C10.3 19 9 17.7 9 16C9 14.3 10.3 13 12 13C13.7 13 15 14.3 15 16C15 17.7 13.7 19 12 19z" />
    </svg>
  </motion.div>
);

const FloatingQuote = ({ text, delay, lane, totalLanes }: { text: string, delay: number, lane: number, totalLanes: number }) => {
  // Use unique vertical placement to prevent bunching at top
  const verticalPos = (lane / totalLanes) * 90 + 5; // Spreads from 5% to 95% height
  
  return (
    <motion.div
      className="absolute font-accent text-4xl md:text-7xl text-black select-none pointer-events-none whitespace-nowrap"
      style={{
        top: `${verticalPos}%`,
        right: `-${Math.random() * 100 + 100}%`, // Randomized starting point to prevent initial bunching
        opacity: 0.2, // Brightened
        textShadow: '2px 2px 0px rgba(255,255,255,0.5)' // Added shadow to make it feel "brighter" against darks
      }}
      animate={{ 
        right: '150%',
        y: [0, lane % 2 === 0 ? 50 : -50, 0],
        rotate: [lane % 2 === 0 ? -2 : 2, lane % 2 === 0 ? 2 : -2, lane % 2 === 0 ? -2 : 2]
      }}
      transition={{ 
        duration: 40 + (lane * 8) + (Math.random() * 20), // Highly variable durations to prevent syncing
        repeat: Infinity,
        delay: delay + (lane * 3),
        ease: "linear"
      }}
    >
      {text}
    </motion.div>
  );
};

export default function BackgroundEffects() {
  const speedLinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (speedLinesRef.current) {
      gsap.to(speedLinesRef.current, {
        backgroundPosition: '0% 100%',
        duration: 0.5,
        repeat: -1,
        ease: 'none'
      });
    }
  }, []);

  // Parallax for the action glows
  const orangeGlowRef = useGsapScroll({
    animation: (el) => gsap.to(el, { y: -100, scale: 1.5, ease: 'none' }),
    scrub: true,
  });

  const blueGlowRef = useGsapScroll({
    animation: (el) => gsap.to(el, { y: 150, scale: 0.8, ease: 'none' }),
    scrub: true,
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#fff4e0]">
      {/* 90s Anime Halftone Pattern - Layer 1 */}
      <div className="absolute inset-0 opacity-[0.1]" style={{
        backgroundImage: `radial-gradient(#000 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px'
      }} />
      
      {/* 90s Anime Halftone Pattern - Layer 2 (Slightly offset) */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(#000 2px, transparent 2px)`,
        backgroundSize: '48px 48px',
        backgroundPosition: '10px 10px'
      }} />

      {/* Ink Splatters (Simulated with radial gradients) */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 opacity-[0.03] bg-black rounded-full filter blur-xl" />
      <div className="absolute bottom-[20%] right-[10%] w-48 h-48 opacity-[0.04] bg-black rounded-full filter blur-2xl" />
      <div className="absolute top-[40%] right-[30%] w-24 h-24 opacity-[0.02] bg-black rounded-full filter blur-lg" />

      {/* Dynamic Speed Lines (Action Feel) */}
      <div 
        ref={speedLinesRef}
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent 95%, #000 95%)',
          backgroundSize: '100% 25px'
        }} 
      />

      {/* Floating Quotes - Spread across full height, moving Right to Left */}
      {narutoQuotes.map((quote, i) => (
        <FloatingQuote 
          key={i} 
          text={quote} 
          delay={i * 8} 
          lane={i} 
          totalLanes={narutoQuotes.length} 
        />
      ))}

      {/* Floating Leaves */}
      {[...Array(12)].map((_, i) => (
        <KonohaLeaf key={i} delay={i * 2} />
      ))}
      
      {/* Naruto Orange Power Glow */}
      <div ref={orangeGlowRef as React.RefObject<HTMLDivElement>} className="absolute w-[80%] h-[80%] top-[-10%] right-[-10%]">
        <motion.div 
          className="w-full h-full rounded-full opacity-40 filter blur-[100px]"
          style={{ 
            background: 'radial-gradient(circle, var(--color-naruto-orange) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Rasengan Blue Chakra Glow */}
      <div ref={blueGlowRef as React.RefObject<HTMLDivElement>} className="absolute w-[60%] h-[60%] bottom-[-10%] left-[-10%]">
        <motion.div 
          className="w-full h-full rounded-full opacity-30 filter blur-[120px]"
          style={{ 
            background: 'radial-gradient(circle, var(--color-rasengan-blue) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}
