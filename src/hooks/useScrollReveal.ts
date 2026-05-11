import { useEffect, useRef, useState } from 'react'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'

export function useScrollReveal(threshold = 0.15, direction: RevealDirection = 'up') {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const getTransform = () => {
    if (isVisible) return 'translate(0,0) scale(1)'
    switch (direction) {
      case 'up': return 'translateY(40px)'
      case 'down': return 'translateY(-40px)'
      case 'left': return 'translateX(-40px)'
      case 'right': return 'translateX(40px)'
      case 'scale': return 'scale(0.9)'
      case 'none': return 'none'
    }
  }

  const revealStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  }

  return { ref, isVisible, revealStyle }
}
