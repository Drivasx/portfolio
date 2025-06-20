import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-16 gap-8 mx-10 lg:flex-row lg:items-start lg:justify-between lg:mx-20 lg:gap-16 lg:pt-44"
    >
      <div className="flex flex-col items-center justify-center gap-4 lg:items-start py-14 lg:gap-12 lg:w-1/2 lg:text-left order-1">
        <p className="text-lg text-center lg:text-2xl">Desarrollador de Software</p>
        <h1 className="text-[32px] font-bold text-center lg:text-6xl lg:text-left">
          Hola, soy <br /> <span className="text-accent">David Rivas</span>
        </h1>
        
        <p className="text-center text-sm lg:text-xl lg:w-xl lg:text-left">
          Desarrollador de software especializado en diseño y desarrollo de
          paginas web profesionales.
        </p>

        <div className="flex justify-center items-center lg:hidden mb-10">
          <picture className="rounded-full w-[340px] h-[340px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/perfil.webp"
              alt="David Rivas"
            />
          </picture>
        </div>
        
        <div className="flex flex-col g-4 py justify-center items-center lg:flex-row lg:items-center lg:justify-start lg:gap-8">
          <button className="border-2 w-fit border-accent text-accent rounded-4xl p-4 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black">
            Descargar HV
          </button>
          <div className="flex justify-center gap-x-5 py-5">
            <button className="border-2 border-accent rounded-4xl text-accent p-1.5 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black">
              <Github />
            </button>
            <button className="border-2 border-accent rounded-4xl text-accent p-1.5 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black">
              <Linkedin />
            </button>
            <button className="border-2 border-accent rounded-4xl text-accent p-1.5 cursor-pointer transition-colors duration-300 hover:bg-accent hover:text-black">
              <Mail />
            </button>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:flex justify-center items-center pt-8 lg:pt-0 lg:pr-20 order-2">
        <picture className="rounded-full w-[736px] h-[736px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/perfil.webp"
            alt="David Rivas"
          />
        </picture>
      </div>
    </section>
  );
};
