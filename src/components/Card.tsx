import type { Testimonial } from "@/types/testimonial";


const Card = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="relative flex flex-col items-center w-full min-w-[280px] max-w-[320px] mx-auto mt-16">
      <div className="absolute rounded-full bg-secondary w-32 h-32 -top-16 left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center overflow-hidden">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-28 h-28 rounded-full object-cover"
        />
      </div>
      <article className="flex flex-col items-center justify-center bg-secondary w-full rounded-2xl text-center shadow-lg pt-20 px-6 pb-10 z-10 min-h-[320px]">
        <p className="text-lg text-center mb-7">⭐⭐⭐⭐⭐</p>
        <h3 className="text-white font-bold font-sans text-lg text-center mb-4">
          {testimonial.title}
        </h3>
        <p className="text-gray-200 font-sans text-sm italic mb-9 text-center">
          {testimonial.text}
        </p>
        <h4 className="font-semibold text-white text-sm text-center">
          {testimonial.name}
        </h4>
        <span className="text-sm text-gray-300 text-center">
          {testimonial.job}
        </span>
      </article>
    </div>
  );
};

export default Card;
