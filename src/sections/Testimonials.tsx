import Card from "@/components/Card";
import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export const Testimonials = () => {
  return <section id="testimonials" className="py-16 px-4 flex flex-col items-center justify-center gap-8">
    <h1 
      data-aos="fade-down"
      data-aos-delay="100"
      className="text-2xl lg:text-4xl font-semibold text-center lg:text-left lg:mb-40 mb-10 mt-20 text-accent"
    >
      Qué dicen mis clientes...
    </h1>

    <div
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div 
        data-aos="fade-right"
        data-aos-delay="400"
        className="hidden lg:flex flex-row items-start justify-center gap-8 px-4"
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-shrink-0">
            <Card testimonial={testimonial} />
          </div>
        ))}
      </div>

      <div 
        data-aos="fade-left"
        data-aos-delay="500"
        className="lg:hidden w-full flex justify-center px-8"
      >
        <div className="relative w-full max-w-[400px]">
          <Carousel 
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="pt-0 -ml-2">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 flex justify-center">
                  <Card testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  </section>;
};
