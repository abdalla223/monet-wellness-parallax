import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage: string;
  className?: string;
  speed?: number;
  height?: string;
}

export const ParallaxSection = ({ 
  children, 
  backgroundImage, 
  className = "", 
  speed = 0.5,
  height = "100vh"
}: ParallaxSectionProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrolled = window.pageYOffset;
      const parallax = parallaxRef.current;
      const rate = scrolled * -speed;
      
      // Only apply parallax on desktop
      if (window.innerWidth > 768) {
        parallax.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section 
      className={`parallax-container ${className}`}
      style={{ height }}
    >
      <div
        ref={parallaxRef}
        className="parallax-bg"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="parallax-content">
        {children}
      </div>
    </section>
  );
};