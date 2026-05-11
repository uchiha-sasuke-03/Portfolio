import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useGsapScrollReveal } from '../hooks/useGsapScrollReveal';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  animationLibrary?: 'framer' | 'gsap';
}

export const Reveal = ({ 
  children, 
  width = '100%', 
  delay = 0, 
  direction = 'up',
  animationLibrary = 'framer'
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  // GSAP Reveal hook
  const gsapRef = useGsapScrollReveal({
    duration: 0.8,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    opacity: 0,
    ease: 'back.out(1.7)' // More bouncy anime feel
  });

  useEffect(() => {
    if (animationLibrary === 'framer' && isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, mainControls, slideControls, animationLibrary]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 75 : direction === 'down' ? -75 : 0,
      x: direction === 'left' ? 75 : direction === 'right' ? -75 : 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      scale: 1
    },
  };

  const slideVariants = {
    hidden: { left: 0 },
    visible: { left: "100%" },
  };

  if (animationLibrary === 'gsap') {
    return (
      <div ref={gsapRef as React.RefObject<HTMLDivElement>} className="relative overflow-hidden" style={{ width }}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ width }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.5, 
          delay: delay, 
          ease: [0.175, 0.885, 0.32, 1.275] // Pop anime ease
        }}
      >
        {children}
      </motion.div>
      
      {/* Anime "Impact" Flash Overlay */}
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.4, ease: "easeIn", delay: delay }}
        className="absolute inset-0 bg-naruto-orange z-20 pointer-events-none"
      />
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.4, ease: "easeIn", delay: delay + 0.1 }}
        className="absolute inset-0 bg-pop-yellow z-10 pointer-events-none"
      />
    </div>
  );
};

export default Reveal;
