import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';
  delay?: number;
  duration?: number;
  stagger?: number;
  trigger?: string;
  start?: string;
  end?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 1,
  stagger = 0,
  trigger,
  start = 'top 80%',
  end = 'bottom 20%'
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Configurar la animación según el tipo
    let fromVars: gsap.TweenVars = {};
    let toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: "power2.out"
    };

    switch (animation) {
      case 'fadeInUp':
        fromVars = { opacity: 0, y: 50 };
        toVars = { ...toVars, y: 0 };
        break;
      case 'fadeInLeft':
        fromVars = { opacity: 0, x: -50 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'fadeInRight':
        fromVars = { opacity: 0, x: 50 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'scaleIn':
        fromVars = { opacity: 0, scale: 0.8 };
        toVars = { ...toVars, scale: 1, ease: "back.out(1.7)" };
        break;
      case 'slideInUp':
        fromVars = { opacity: 0, y: 100 };
        toVars = { ...toVars, y: 0 };
        break;
    }

    // Si hay stagger, animar los children
    if (stagger > 0 && element.children) {
      gsap.fromTo(
        element.children,
        fromVars,
        {
          ...toVars,
          stagger,
          scrollTrigger: {
            trigger: trigger || element,
            start,
            end,
            toggleActions: "play none none reverse"
          }
        }
      );
    } else {
      // Animación simple del elemento
      gsap.fromTo(
        element,
        fromVars,
        {
          ...toVars,
          scrollTrigger: {
            trigger: trigger || element,
            start,
            end,
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, duration, stagger, trigger, start, end]);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
};

// Componente para animaciones de texto
export const AnimatedText: React.FC<{
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}> = ({ children, className = '', delay = 0, stagger = 0.05 }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Dividir el texto en caracteres para animación de escritura
    const chars = element.textContent?.split('') || [];
    element.innerHTML = chars.map(char => `<span>${char}</span>`).join('');

    gsap.fromTo(
      element.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children, delay, stagger]);

  return (
    <h1 ref={textRef} className={className}>
      {children}
    </h1>
  );
};

// Componente para animaciones de números (contador)
export const AnimatedCounter: React.FC<{
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
}> = ({ end, duration = 2, className = '', suffix = '' }) => {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { textContent: 0 },
      {
        textContent: end,
        duration,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [end, duration]);

  return (
    <span ref={counterRef} className={className}>
      0{suffix}
    </span>
  );
}; 