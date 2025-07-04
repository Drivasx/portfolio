"use client";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLPictureElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-david-rivas.pdf'; // Ruta del archivo en public
    link.download = 'CV-David-Rivas.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    tl.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );

    if (buttonsRef.current?.children) {
      tl.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }

    tl.fromTo(
      [imageRef.current, borderRef.current],
      { opacity: 0, scale: 0.8, rotation: -5 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      },
      "-=0.8"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-16 gap-8 mx-10 lg:flex-row lg:items-start lg:justify-between lg:mx-20 lg:gap-16 lg:pt-44"
    >
      <div className="flex flex-col items-center justify-center gap-4 lg:items-start py-14 lg:gap-12 lg:w-1/2 lg:text-left order-1">
        <p ref={subtitleRef} className="text-lg text-center lg:text-2xl">
          Desarrollador de Software
        </p>
        <h1
          ref={titleRef}
          className="text-[32px] font-bold text-center lg:text-6xl lg:text-left"
        >
          Hola, soy <br /> <span className="text-accent">David Rivas</span>
        </h1>

        <p
          ref={descriptionRef}
          className="text-center text-sm lg:text-xl lg:w-xl lg:text-left"
        >
          Desarrollador de software especializado en diseño y desarrollo de
          paginas web profesionales.
        </p>
        <div className="relative flex justify-center items-center lg:hidden mb-10 mt-6">
          {/* Borde giratorio */}
          <motion.div
            ref={borderRef}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
              velocity: 200,
            }}
            className="absolute w-[360px] h-[360px] rounded-full border-4 border-dashed border-accent"
          />

          {/* Imagen circular centrada */}
          <picture
            ref={imageRef}
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
          ref={buttonsRef}
          className="flex flex-col g-4 py justify-center items-center lg:flex-row lg:items-center lg:justify-start lg:gap-8"
        >
          <button className="border-2 w-fit border-accent text-accent rounded-4xl p-4 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black"
          onClick={downloadCV}>
            Descargar HV
          </button>
          <div className="flex justify-center gap-x-5 py-5">
            <a href="https://github.com/Drivasx" target="_blank">
              <button className="border-2 border-accent rounded-4xl text-accent p-1.5 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black">
                <Github />
              </button>
            </a>
            <a href="www.linkedin.com/in/davidm-rivasb" target="_blank">
              <button className="border-2 border-accent rounded-4xl text-accent p-1.5 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black">
                <Linkedin />
              </button>
            </a>
            <a href="#contact">
              <button className="border-2 border-accent rounded-4xl text-accent p-1.5 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black">
                <Mail />
              </button>
            </a>
            <div></div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center lg:mr-20 order-2">
        <motion.div
          ref={borderRef}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
            velocity: 100,
          }}
          className="absolute w-[760px] h-[760px] rounded-full border-4 border-dashed border-accent"
        />

        <picture
          ref={imageRef}
          className="relative w-[736px] h-[736px] rounded-full overflow-hidden"
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
