import { services } from "@/data/services";

export const Services = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 mt-20 mb-20">
        <h1 className="text-2xl lg:text-4xl lg:mb-32 mb-10 text-center lg:text-left text-accent">Servicios</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          {services.map((service) => (
            <article className=" h-auto gap-14 hover:scale-105 transition-all duration-300 hover:text-accent group" key={service.id}>
              <h2 className="text-xl lg:text-3xl mb-2 font-bold">0{service.id}</h2>
              <h2 className="text-xl lg:text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-base lg:text-lg text-gray-400 group-hover:text-accent transition-colors duration-300">{service.description}</p>
              <hr className="my-6 border-gray-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
