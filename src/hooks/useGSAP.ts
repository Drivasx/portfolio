import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const elementRef = useRef<HTMLElement>(null);

  const fadeInUp = (delay = 0) => {
    return {
      opacity: 0,
      y: 50,
      duration: 1,
      delay,
      ease: "power2.out"
    };
  };

  const fadeInLeft = (delay = 0) => {
    return {
      opacity: 0,
      x: -50,
      duration: 1,
      delay,
      ease: "power2.out"
    };
  };

  const fadeInRight = (delay = 0) => {
    return {
      opacity: 0,
      x: 50,
      duration: 1,
      delay,
      ease: "power2.out"
    };
  };

  const scaleIn = (delay = 0) => {
    return {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay,
      ease: "back.out(1.7)"
    };
  };

  const staggerChildren = (stagger = 0.2) => {
    return {
      stagger,
      ease: "power2.out"
    };
  };

  return {
    elementRef,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerChildren
  };
};

// Hook para animaciones de scroll específicas
export const useScrollAnimation = () => {
  const animateOnScroll = (
    trigger: string | HTMLElement,
    animation: gsap.TweenVars,
    scrollTriggerOptions?: ScrollTrigger.Vars
  ) => {
    return gsap.fromTo(
      trigger,
      { opacity: 0, y: 50 },
      {
        ...animation,
        scrollTrigger: {
          trigger,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          ...scrollTriggerOptions
        }
      }
    );
  };

  const animateStagger = (
    elements: string,
    animation: gsap.TweenVars,
    staggerOptions?: gsap.StaggerVars
  ) => {
    return gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        ...animation,
        stagger: staggerOptions || 0.2,
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  return {
    animateOnScroll,
    animateStagger
  };
}; 