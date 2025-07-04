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
              </AnimatedSection>
  </section>;
};
