import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxSection({ children, bgImage, height = "h-[80vh]", overlay = true }) {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const ref = React.useRef(null);

  useEffect(() => {
    if (ref.current) {
      setElementTop(ref.current.offsetTop);
    }
  }, []);

  const y = useTransform(
    scrollY,
    [elementTop - 500, elementTop + 500],
    [0, -150]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${height}`}>
      <motion.div
        style={{
          y,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/30 z-10" />
      )}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
} 