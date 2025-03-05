import { useEffect } from 'react';

export function useMouseEffect(isDarkMode) {
  useEffect(() => {
    // Create cursor elements with enhanced styling
    const cursor = document.createElement('div');
    cursor.className = 'cursor-effect';
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    
    document.body.appendChild(cursor);
    document.body.appendChild(trail);
    document.body.appendChild(glow);

    let mouseX = 0;
    let mouseY = 0;

    const updateCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Direct positioning for instant response
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      trail.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1.5)`;
      glow.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(2)`;
    };

    // Enhanced hover effects
    const handleMouseEnter = () => {
      cursor.classList.add('cursor-hover');
      trail.classList.add('trail-hover');
      glow.classList.add('glow-hover');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-hover');
      trail.classList.remove('trail-hover');
      glow.classList.remove('glow-hover');
    };

    // Update the styles based on dark mode
    const updateThemeColors = () => {
      cursor.style.borderColor = isDarkMode ? 'rgba(255, 223, 0, 0.8)' : 'rgba(255, 200, 0, 0.8)';
      trail.style.backgroundColor = isDarkMode ? 'rgba(255, 223, 0, 0.3)' : 'rgba(255, 200, 0, 0.3)';
      glow.style.background = isDarkMode 
        ? 'radial-gradient(circle, rgba(255, 223, 0, 0.2) 0%, rgba(255, 223, 0, 0) 70%)'
        : 'radial-gradient(circle, rgba(255, 200, 0, 0.2) 0%, rgba(255, 200, 0, 0) 70%)';
    };

    updateThemeColors();
    
    document.addEventListener('mousemove', updateCursor);
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Create and inject styles
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.removeChild(cursor);
      document.body.removeChild(trail);
      document.body.removeChild(glow);
      document.head.removeChild(styleSheet);
    };
  }, [isDarkMode]);
}

const styles = `
  .cursor-effect {
    position: fixed;
    width: 24px;
    height: 24px;
    pointer-events: none;
    z-index: 9999;
    transition: width 0.2s, height 0.2s;
    mix-blend-mode: difference;
    clip-path: polygon(
      30% 0%, 
      70% 0%, 
      100% 30%, 
      100% 70%, 
      70% 100%, 
      30% 100%, 
      0% 70%, 
      0% 30%
    );
    background: rgba(255, 200, 0, 0.8);
    transform-origin: center;
    left: 0;
    top: 0;
  }

  .cursor-trail {
    position: fixed;
    width: 12px;
    height: 12px;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.1s;
    background: rgba(255, 200, 0, 0.3);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    left: 0;
    top: 0;
  }

  .cursor-glow {
    position: fixed;
    width: 40px;
    height: 40px;
    pointer-events: none;
    z-index: 9997;
    transition: transform 0.15s ease-out;
    background: radial-gradient(circle, rgba(255, 200, 0, 0.2) 0%, rgba(255, 200, 0, 0) 70%);
    clip-path: polygon(
      50% 0%,
      80% 10%,
      100% 35%,
      100% 70%,
      80% 90%,
      50% 100%,
      20% 90%,
      0% 70%,
      0% 35%,
      20% 10%
    );
    left: 0;
    top: 0;
  }

  .cursor-hover {
    width: 32px;
    height: 32px;
    transform: rotate(45deg);
  }

  .trail-hover {
    transform: scale(2) rotate(45deg) !important;
    opacity: 0.5;
  }

  .glow-hover {
    transform: scale(3) !important;
  }
`; 