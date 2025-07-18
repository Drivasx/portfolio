import { services } from "@/data/services";

export const Services = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 mt-20 mb-20">
        <h1 
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-2xl lg:text-4xl lg:mb-32 mb-10 text-center lg:text-left text-accent"
        >
          Servicios
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          {services.map((service, index) => (
            <article 
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={100 + (index * 200)}
              className="h-auto gap-14 hover:scale-[1.02] transition-transform duration-700 ease-out hover:text-accent group smooth-hover" 
            >
              <h2 className="text-xl lg:text-3xl mb-2 font-bold transition-colors duration-700 ease-out">0{service.id}</h2>
              <h2 className="text-xl lg:text-3xl font-bold mb-4 transition-colors duration-700 ease-out">{service.title}</h2>
              <p className="text-base lg:text-lg text-gray-400 group-hover:text-accent transition-colors duration-700 ease-out">
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
