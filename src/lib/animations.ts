import type { SpringOptions } from 'framer-motion'

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring', stiffness: 100, damping: 20 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { type: 'spring', stiffness: 200, damping: 25 }
}

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { type: 'spring', stiffness: 150, damping: 20 }
}

export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { type: 'spring', stiffness: 150, damping: 20 }
}

// Match Framer's spring physics
export const framerSpring: SpringOptions = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  restDelta: 0.001
}

// Stagger children animations
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}