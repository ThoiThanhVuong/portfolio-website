
export const transitionConfig = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1] // standard cubic-bezier
};

export const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
  exit: { 
    opacity: 0, 
    y: -30 
  }
};

export const scaleVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.95 
  },
  animate: { 
    opacity: 1, 
    scale: 1 
  },
  exit: { 
    opacity: 0 
  }
};
