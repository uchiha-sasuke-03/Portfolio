import React, { useRef, useState } from 'react';
import * as anime from 'animejs';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  href,
  target,
  rel,
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [isElevated, setIsElevated] = useState(false);

  const handleMouseEnter = () => {
    setIsElevated(true);
    if (buttonRef.current) {
      anime.default({
        targets: buttonRef.current,
        scale: 1.05,
        duration: 400,
        easing: 'easeOutElastic(1, .6)',
      });
    }
  };

  const handleMouseLeave = () => {
    setIsElevated(false);
    if (buttonRef.current) {
      anime.default({
        targets: buttonRef.current,
        scale: 1,
        duration: 400,
        easing: 'easeOutElastic(1, .6)',
      });
    }
  };

  const baseClasses = `framer-button ${variant === 'primary' ? 'framer-button-primary' : 'framer-button-secondary'} ${isElevated ? 'elevated' : ''} ${className}`;

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={baseClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
