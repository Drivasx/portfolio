import type { Testimonial } from "@/types/testimonial";


const Card = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="relative">
      <div className="absolute rounded-full bg-secondary w-32 h-32 -top-16 left-1/2 transform -translate-x-1/2">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-auto h-auto p-2 rounded-full mb-2"
        />
      </div>
      <article className="flex flex-col items-center justify-center bg-secondary w-80 h-full rounded-2xl text-left shadow-lg pt-20 px-6 pb-10">
        <p className="text-lg text-center mb-7">⭐⭐⭐⭐⭐</p>
        <h3 className="text-white font-bold font-sans text-lg text-left mb-4">
          {testimonial.title}
        </h3>
        <p className="text-gray-200 font-sans text-sm italic mb-9">
          {testimonial.text}
        </p>
        <h4 className="font-semibold text-white text-sm text-left">
          {testimonial.name}
        </h4>
        <span className="text-sm text-gray-300 text-left">
          {testimonial.job}
        </span>
      </article>
    </div>
  );
};

export default Card;
