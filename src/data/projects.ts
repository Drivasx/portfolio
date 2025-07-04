import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de gestion para una papelería",
    description:
      "Un sistema de gestión para una papelería, que permite llevar un control de inventario y ventas.",
    technologies: ["Next.js", "Node.js", "MySQL"],
    src: "/papeleria.webp",
    url: "https://mi-portfolio.com",
    github: "https://github.com/Drivasx/RETAIL-SHOP-MANAGEMENT",
    button: "Ver Proyecto",
  },
  {
    id: "2",
    title: "Pagina web para organizadora de eventos",
    description:
      "Una página web para una organizadora de eventos, con un diseño atractivo y funcional. Colaboracion con Yeiner Navarro.",
    technologies: ["Astro", "Tailwind CSS", "JavaScript"],
    src: "/eventos.webp",
    url: "https://calusajoeventosydecoraciones.com",
    github: "https://github.com/Drivasx/calusajo-landing",
    button: "Ver Proyecto",
  },
  {
    id: "3",
    title: "Pagina web para un centro odontológico",
    description:
      "Una página web para un centro odontológico, que permite a los pacientes agendar citas y conocer los servicios ofrecidos.",
    technologies: ["Astro", "Tailwind CSS", "JavaScript"],
    src: "/odontologia.webp",
    url: "https://odontologia-landing-page.vercel.app/",
    github: "https://github.com/Drivasx/odontologia-landing-page",
    button: "Ver Proyecto",
  },
  {
    id: "4",
    title: "Pagina web para un centro jurídico",
    description:
      "Una página web para un centro jurídico, que permite a los usuarios conocer los servicios ofrecidos y contactar al centro.",
    technologies: ["Astro", "Tailwind CSS", "JavaScript"],
    src: "/juridico.webp",
    url: "https://centrojuridico.vercel.app/",
    github: "https://github.com/Drivasx/centrojuridico",
    button: "Ver Proyecto",
  },
  {
    id: "5",
    title: "Sistema de gestión para las cuentas de un bar",
    description:
      "Un sistema de gestión para las cuentas de un bar, que permite llevar un control de ventas y clientes.",
    technologies: ["React", "Supabase", "JavaScript"],
    src: "/gestion-bar.webp",
    url: "https://calusajotransportes.com",
    github: "https://github.com/Drivasx/bar-management",
    button: "Ver Proyecto",
  },
];
