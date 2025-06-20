import { services } from "@/data/services";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación del título
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animación de las tarjetas de servicios con stagger
    if (servicesRef.current?.children) {
      gsap.fromTo(
        servicesRef.current.children,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 mt-20 mb-20">
        <h1 ref={titleRef} className="text-2xl lg:text-4xl lg:mb-32 mb-10 text-center lg:text-left text-accent">
          Servicios
        </h1>
        <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          {services.map((service) => (
            <article 
              className="h-auto gap-14 hover:scale-105 transition-all duration-300 hover:text-accent group" 
              key={service.id}
            >
              <h2 className="text-xl lg:text-3xl mb-2 font-bold">0{service.id}</h2>
              <h2 className="text-xl lg:text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-base lg:text-lg text-gray-400 group-hover:text-accent transition-colors duration-300">
                {service.description}
              </p>
              <hr className="my-6 border-gray-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
