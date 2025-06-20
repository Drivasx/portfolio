import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de gestion para una papelería",
    description:
      "Un portafolio personal para mostrar mis proyectos y habilidades.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    src: "/papeleria.jpg",
    url: "https://mi-portfolio.com",
    github: "",
    button: "Ver Proyecto",
  },
  {
    id: "2",
    title: "Pagina web para organizadora de eventos",
    description:
      "Una página web para una organizadora de eventos, con un diseño atractivo y funcional.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    src: "/eventos.jpg",
    url: "https://mi-ecommerce.com",
    github: "",
    button: "Ver Proyecto",
  },
];
