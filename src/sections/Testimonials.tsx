import Card from "@/components/Card";
import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";


gsap.registerPlugin(ScrollTrigger);

export const Testimonials = () => {

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    if (testimonialsRef.current?.children) {

      gsap.fromTo(
        testimonialsRef.current.children,
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  
  return <section ref={sectionRef} id="testimonials" className="py-16 px-4 flex flex-col items-center justify-center gap-8">
    <AnimatedText className="text-2xl lg:text-4xl font-semibold text-center lg:text-left lg:mb-40 mb-10 mt-20 text-accent" stagger={0.05}>Qué dicen mis clientes...</AnimatedText>

    <AnimatedSection animation="fadeInLeft" delay={0.3} duration={1}>

    <div className="hidden lg:flex flex-row items-start justify-center gap-8 px-4">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="flex-shrink-0">
          <Card testimonial={testimonial} />
        </div>
      ))}
    </div>

    <div className="lg:hidden w-full flex justify-center px-8">
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
              </AnimatedSection>
  </section>;
};
