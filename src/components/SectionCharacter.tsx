import { motion } from 'framer-motion';

interface SectionCharacterProps {
  imagePath: string;
  name: string;
  side?: 'left' | 'right';
  className?: string;
}

export const SectionCharacter = ({ imagePath, name, side = 'right', className = "" }: SectionCharacterProps) => {
  return (
    <motion.div 
      className={`absolute hidden lg:block z-0 pointer-events-none ${side === 'right' ? '-right-2 xl:-right-12' : '-left-2 xl:-left-12'} top-1/2 -translate-y-1/2 ${className}`}
      initial={{ opacity: 0, x: side === 'right' ? 100 : -100, rotate: side === 'right' ? 10 : -10 }}
      whileInView={{ opacity: 0.8, x: 0, rotate: side === 'right' ? 5 : -5 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, type: "spring", bounce: 0.4 }}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-pop-yellow border-4 border-black translate-x-4 translate-y-4 -z-10" />
        <div className="border-4 border-black bg-white p-2 overflow-hidden w-64 h-80 shadow-[8px_8px_0px_#000]">
          <img 
            src={imagePath} 
            alt={name} 
            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black text-white font-heading text-xl px-4 py-1 uppercase tracking-widest">
          {name}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionCharacter;
