"use client";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

export const Home = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-david-rivas.pdf'; 
    link.download = 'CV-David-Rivas.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-14 gap-8 mx-10 lg:flex-row lg:items-start lg:justify-between lg:mx-20 lg:gap-16 lg:pt-20"
    >
      <div className="flex flex-col items-center justify-center gap-4 lg:items-start py-14 lg:gap-12 lg:w-1/2 lg:text-left order-1">
        <p 
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg text-center lg:text-2xl"
        >
          Desarrollador de Software
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[32px] font-bold text-center lg:text-6xl lg:text-left"
        >
          Hola, soy <br /> <span className="text-accent animate-float">David Rivas</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center text-sm lg:text-xl lg:w-xl lg:text-left"
        >
          Desarrollador de software especializado en diseño y desarrollo de
          paginas web profesionales.
        </p>
        <div 
          data-aos="zoom-in"
          data-aos-delay="400"
          className="relative flex justify-center items-center lg:hidden mb-10 mt-6"
        >
          <div
            className="absolute w-[360px] h-[360px] rounded-full border-4 border-dashed border-accent animate-spin"
            style={{ animationDuration: '12s' }}
          />

          <picture
            className="relative w-[340px] h-[340px] rounded-full overflow-hidden"
          >
            <img
              src="/perfil.webp"
              alt="David Rivas"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-col g-4 py justify-center items-center lg:flex-row lg:items-center lg:justify-start lg:gap-8"
        >
          <button 
            data-aos="fade-right"
            data-aos-delay="600"
            className="border-2 w-fit border-accent text-accent rounded-4xl p-4 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black smooth-hover"
            onClick={downloadCV}
          >
            Descargar HV
          </button>
          <div 
            data-aos="fade-left"
            data-aos-delay="700"
            className="flex justify-center gap-x-5 py-5"
          >
            <a href="https://github.com/Drivasx" target="_blank">
              <button className="border-2 border-accent rounded-4xl text-accent p-1.5 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black smooth-hover">
                <Github />
              </button>
            </a>
            <a href="www.linkedin.com/in/davidm-rivasb" target="_blank">
              <button className="border-2 border-accent rounded-4xl text-accent p-1.5 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black smooth-hover">
                <Linkedin />
              </button>
            </a>
            <a href="#contact">
              <button className="border-2 border-accent rounded-4xl text-accent p-1.5 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black smooth-hover">
                <Mail />
              </button>
            </a>
            <div></div>
          </div>
        </div>
      </div>

      <div 
        data-aos="zoom-in"
        data-aos-delay="400"
        className="hidden lg:flex justify-center items-center lg:mr-20 2xl:mr-40 order-2"
      >
        <div
          className="absolute w-[320px] h-[320px] xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px] rounded-full border-4 border-dashed border-accent animate-spin"
          style={{ animationDuration: '10s' }}
        />

        <picture
          className="relative w-[300px] h-[300px] xl:w-[480px] xl:h-[480px] 2xl:w-[680px] 2xl:h-[680px] rounded-full overflow-hidden"
        >
          <img
            src="/perfil.webp"
            alt="David Rivas"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
    </section>
  );
};
