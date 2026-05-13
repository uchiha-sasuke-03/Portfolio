import { motion } from 'framer-motion';
import { useGsapScroll } from '../hooks/useGsapScroll';
import { useIsMobile } from '../hooks/useIsMobile';
import gsap from 'gsap';
import { useEffect, useRef, useMemo } from 'react';

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

// Floating Leaf Component — static on mobile (no animation)
const KonohaLeaf = ({ delay, isMobile }: { delay: number; isMobile: boolean }) => {
  // On mobile: render a static, faded leaf at a fixed position instead of animating
  const staticStyle = useMemo(() => ({
    top: `${(delay / 24) * 100}%`,
    left: `${(Math.abs(Math.sin(delay * 1.3)) * 80 + 10)}%`,
  }), [delay]);

  if (isMobile) {
    return (
      <div
        className="absolute w-5 h-5 text-leaf-green opacity-20 pointer-events-none"
        style={staticStyle}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 2 3 7 3 12C3 17 12 22 12 22C12 22 21 17 21 12C21 7 12 2zM12 19C10.3 19 9 17.7 9 16C9 14.3 10.3 13 12 13C13.7 13 15 14.3 15 16C15 17.7 13.7 19 12 19z" />
        </svg>
      </div>
    );
  }

  return (
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
};

const FloatingQuote = ({ text, delay, lane, totalLanes, isMobile }: { text: string, delay: number, lane: number, totalLanes: number, isMobile: boolean }) => {
  const verticalPos = (lane / totalLanes) * 85 + 7.5;
  
  // On mobile: render static, no animation
  if (isMobile) {
    return (
      <div
        className="absolute font-accent text-2xl text-black select-none pointer-events-none whitespace-nowrap"
        style={{
          top: `${verticalPos}%`,
          left: `${10 + (lane * 7) % 50}%`,
          opacity: 0.08, 
          textShadow: '1px 1px 0px rgba(255,255,255,0.3)',
          transform: `rotate(${lane % 2 === 0 ? -2 : 2}deg)`,
        }}
      >
        {text}
      </div>
    );
  }

  return (
    <motion.div
      className="absolute font-accent text-3xl md:text-6xl text-black select-none pointer-events-none whitespace-nowrap"
      style={{
        top: `${verticalPos}%`,
        right: `-${Math.random() * 50 + 100}%`,
        opacity: 0.15, 
        textShadow: '1px 1px 0px rgba(255,255,255,0.3)'
      }}
      animate={{ 
        right: '150%',
        rotate: [lane % 2 === 0 ? -1 : 1, lane % 2 === 0 ? 1 : -1, lane % 2 === 0 ? -1 : 1]
      }}
      transition={{ 
        duration: 50 + (lane * 5),
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
    >
      {text}
    </motion.div>
  );
};

export default function BackgroundEffects() {
  const speedLinesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // On mobile, skip the GSAP speed-line animation entirely
  useEffect(() => {
    if (isMobile) return;
    if (speedLinesRef.current) {
      gsap.to(speedLinesRef.current, {
        backgroundPosition: '0% 100%',
        duration: 0.5,
        repeat: -1,
        ease: 'none'
      });
    }
  }, [isMobile]);

  // Parallax for the action glows — desktop only
  const orangeGlowRef = useGsapScroll({
    animation: (el) => gsap.to(el, { y: -100, scale: 1.5, ease: 'none' }),
    scrub: true,
    disabled: isMobile,
  });

  const blueGlowRef = useGsapScroll({
    animation: (el) => gsap.to(el, { y: 150, scale: 0.8, ease: 'none' }),
    scrub: true,
    disabled: isMobile,
  });

  // Reduce element counts on mobile
  const leafCount = isMobile ? 4 : 12;
  const quoteCount = isMobile ? 4 : narutoQuotes.length;
  const quotesToShow = narutoQuotes.slice(0, quoteCount);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#fff4e0]">
      {/* 90s Anime Halftone Pattern - Layer 1 */}
      <div className="absolute inset-0 opacity-[0.1]" style={{
        backgroundImage: `radial-gradient(#000 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px'
      }} />
      
      {/* 90s Anime Halftone Pattern - Layer 2 (Slightly offset) — desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(#000 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
          backgroundPosition: '10px 10px'
        }} />
      )}

      {/* Ink Splatters (Simulated with radial gradients) */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 opacity-[0.03] bg-black rounded-full filter blur-xl" />
      <div className="absolute bottom-[20%] right-[10%] w-48 h-48 opacity-[0.04] bg-black rounded-full filter blur-2xl" />
      {!isMobile && (
        <div className="absolute top-[40%] right-[30%] w-24 h-24 opacity-[0.02] bg-black rounded-full filter blur-lg" />
      )}

      {/* Dynamic Speed Lines (Action Feel) — desktop only */}
      {!isMobile && (
        <div 
          ref={speedLinesRef}
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent 95%, #000 95%)',
            backgroundSize: '100% 25px'
          }} 
        />
      )}

      {/* Floating Quotes */}
      {quotesToShow.map((quote, i) => (
        <FloatingQuote 
          key={i} 
          text={quote} 
          delay={i * 8} 
          lane={i} 
          totalLanes={quotesToShow.length}
          isMobile={isMobile}
        />
      ))}

      {/* Floating Leaves */}
      {[...Array(leafCount)].map((_, i) => (
        <KonohaLeaf key={i} delay={i * 2} isMobile={isMobile} />
      ))}
      
      {/* Naruto Orange Power Glow — simplified on mobile (no animation, smaller blur) */}
      {isMobile ? (
        <div className="absolute w-[60%] h-[60%] top-[-5%] right-[-5%]">
          <div 
            className="w-full h-full rounded-full opacity-25 filter blur-[60px]"
            style={{ 
              background: 'radial-gradient(circle, var(--color-naruto-orange) 0%, transparent 70%)',
            }}
          />
        </div>
      ) : (
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
      )}
      
      {/* Rasengan Blue Chakra Glow — simplified on mobile */}
      {isMobile ? (
        <div className="absolute w-[50%] h-[50%] bottom-[-5%] left-[-5%]">
          <div 
            className="w-full h-full rounded-full opacity-20 filter blur-[50px]"
            style={{ 
              background: 'radial-gradient(circle, var(--color-rasengan-blue) 0%, transparent 70%)',
            }}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
}
