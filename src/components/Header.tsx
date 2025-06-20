import { AlignRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");


    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.5, rootMargin: "-100px 0px" }
      );

      const sections = ["home", "about", "projects", "testimonials", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }, []);


  const getLinkClass = (section: string) => {
    return section === activeSection 
      ? "text-accent transition-colors duration-300 underline" 
      : "hover:text-accent transition-colors duration-300";
  };

  return (
    <header className="fixed min-w-full bg-secondary text-white p-4 min-h-24 items-center flex justify-between lg:px-[60px] z-10">
      <a href="#home">
        <h1 className="text-5xl">
          David <span className="text-accent">.</span>{" "}
        </h1>
      </a>
        <nav className="hidden lg:flex gap-16 text-lg ml-auto items-center">
            <a
                href="#home"
                className={getLinkClass("home")}
            >
                Inicio
            </a>
            <a
                href="#about"
                className={getLinkClass("about")}
            >
                Servicios
            </a>
            <a
                href="#projects"
                className={getLinkClass("projects")}
            >
                Proyectos
            </a>
            <a
                href="#testimonials"
                className={getLinkClass("testimonials")}
            >
                Reseñas
            </a>
            <a
                href="#contact"
                className={activeSection === "contact" 
                  ? "transition-colors duration-300" 
                  : "hover:text-accent transition-colors duration-300"}
            >
                <button className={activeSection === "contact" 
                  ? "bg-accent-hover text-black cursor-pointer px-4 py-2 rounded-xl transition-colors duration-300" 
                  : "bg-accent text-black cursor-pointer px-4 py-2 rounded-xl transition-colors duration-300 hover:bg-accent-hover"}>
                Contáctame
                </button>
            </a>
        </nav>
      <Sheet>
        <SheetTrigger className="text-3xl cursor-pointer text-accent transition-colors duration-300">
          <AlignRight className="text-3xl cursor-pointer text-accent transition-colors duration-300 lg:hidden" />
        </SheetTrigger>
        <SheetContent side="right" className="w-3/4 sm:w-1/2 bg-primary">
          <nav className="flex flex-col mt-20 gap-4 items-center h-full">
            <a href="#home" className={activeSection === "home" ? "text-lg text-accent" : "text-lg"}>
              Inicio
            </a>
            <a href="#about" className={activeSection === "about" ? "text-lg text-accent" : "text-lg"}>
              Servicios
            </a>
            <a href="#projects" className={activeSection === "projects" ? "text-lg text-accent" : "text-lg"}>
              Proyectos
            </a>
            <a href="#testimonials" className={activeSection === "testimonials" ? "text-lg text-accent" : "text-lg"}>
              Reseñas
            </a>
            <a href="#contact" className={activeSection === "contact" ? "text-lg text-accent" : "text-lg"}>Contáctame</a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
