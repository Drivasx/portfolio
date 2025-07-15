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

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <h1 
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-2xl lg:text-4xl lg:mb-12 mb-4 text-center lg:text-left text-accent"
        >
          Algunos de mis trabajos
        </h1>
        
        <div
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="w-full">
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 p-4">
                    <div 
                      data-aos="fade-right"
                      data-aos-delay="200"
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
                    </div>

                    <div 
                      data-aos="fade-left"
                      data-aos-delay="400"
                      className="flex items-center justify-center order-1 md:order-2"
                    >
                      <div className="w-full aspect-square">
                        <img
                          src={project.src}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div 
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex gap-4 mt-4 lg:mt-0"
            >
              <CarouselPrevious className="static bg-transparent hover:bg-accent hover:text-black transition-all cursor-pointer border-accent text-accent" />
              <CarouselNext className="static bg-transparent hover:bg-accent hover:text-black transition-all cursor-pointer border-accent text-accent" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
