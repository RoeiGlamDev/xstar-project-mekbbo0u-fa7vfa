import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useAnimation = (triggerRef: React.RefObject<HTMLElement>, animationProps: any) => {
  const animationRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    if (triggerRef.current) {
      animationRef.current = gsap.timeline({ paused: true })
        .from(triggerRef.current, animationProps);

      const handleScroll = () => {
        const { top } = triggerRef.current!.getBoundingClientRect();
        if (top < window.innerHeight && top > 0) {
          animationRef.current!.play();
        } else {
          animationRef.current!.pause();
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => {
        window.removeEventListener('scroll', handleScroll);
        animationRef.current!.kill(); // Cleanup
      };
    }
  }, [triggerRef, animationProps]);

  return animationRef;
};

export default useAnimation;