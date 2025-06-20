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
    <h2 className="text-2xl lg:text-4xl font-semibold text-center lg:text-left lg:mb-40 mb-10 mt-20 text-accent">Lo que dicen mis clientes</h2>
    
    <div className="hidden lg:flex flex-row items-top justify-center gap-20">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>

    <div className="lg:hidden w-full flex justify-center">
      <div className="relative w-full max-w-[320px]">
        <Carousel 
          className="w-full"
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <div className="flex flex-col gap-8">
            <CarouselContent className="pt-16">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="flex justify-center">
                  <Card testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>

          </div>
        </Carousel>
      </div>
    </div>
  </section>;
};
