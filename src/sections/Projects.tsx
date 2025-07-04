"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación para las tarjetas del carousel cuando cambian
    const observer = new MutationObserver(() => {
      const activeItem = carouselRef.current?.querySelector('[data-state="active"]');
      if (activeItem) {
        gsap.fromTo(
          activeItem,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
          }
        );
      }
    });

    if (carouselRef.current) {
      observer.observe(carouselRef.current, {
        attributes: true,
        subtree: true,
        attributeFilter: ['data-state']
      });
    }

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <AnimatedText 
          className="text-2xl lg:text-4xl lg:mb-12 mb-4 text-center lg:text-left text-accent"
          stagger={0.05}
        >
          Algunos de mis trabajos
        </AnimatedText>
        
        <AnimatedSection 
          animation="fadeInUp"
          delay={0.3}
          duration={1}
        >
          <Carousel ref={carouselRef} className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="w-full">
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 p-4">
                    <AnimatedSection 
                      animation="fadeInLeft"
                      delay={0.1 * index}
                      duration={0.8}
                      className="flex flex-col justify-center lg:space-y-6 order-2 md:order-1"
                    >
                      <h1 className="text-3xl lg:text-6xl font-bold text-white/90">
                        0{project.id}
                      </h1>

                      <h2 className="text-2xl font-medium mt-4 mb-2">
                        {project.title}
                      </h2>

                      <p className="text-sm text-white/70">
                        {project.description}
                      </p>

                      <div className="mt-6">
                        <h3 className="text-accent text-sm">
                          {project.technologies.join(", ")}
                        </h3>
                        <hr className="mt-2 border-t border-white/20 w-full" />
                      </div>

                      <div className="flex gap-4 mt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#2a2a36] p-3 rounded-full hover:bg-accent hover:text-black transition-all duration-300"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#2a2a36] p-3 rounded-full hover:bg-accent hover:text-black transition-all duration-300"
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection 
                      animation="scaleIn"
                      delay={0.2 * index}
                      duration={1}
                      className="flex items-center justify-center order-1 md:order-2"
                    >
                      <div className="w-full aspect-square">
                        <img
                          src={project.src}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </AnimatedSection>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <AnimatedSection 
              animation="fadeInUp"
              delay={0.1}
              duration={0.6}
              start="top 110%"
              className="flex gap-4 mt-4 lg:mt-0"
            >
              <CarouselPrevious className="static bg-transparent hover:bg-accent hover:text-black transition-all cursor-pointer border-accent text-accent" />
              <CarouselNext className="static bg-transparent hover:bg-accent hover:text-black transition-all cursor-pointer border-accent text-accent" />
            </AnimatedSection>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
};
