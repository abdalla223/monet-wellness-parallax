import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Carlita made me feel so comfortable during my first Botox appointment. The results look completely natural - people just say I look refreshed and happy!",
    author: "Sarah M.",
    location: "Akron"
  },
  {
    text: "The Semaglutide program changed my life. Carlita's support and medical expertise made all the difference. I've lost 35 pounds and feel amazing!",
    author: "Jennifer L.",
    location: "Copley"
  },
  {
    text: "I love that Carlita comes to my home. The convenience and privacy are amazing, and the results speak for themselves. Natural and beautiful!",
    author: "Maria R.",
    location: "Fairlawn"
  },
  {
    text: "After 18 months with Monet Aesthetics, I finally understand what 'Love Yourself First' means. Carlita doesn't just treat - she transforms lives.",
    author: "Ashley K.",
    location: "Green"
  },
  {
    text: "The professionalism and care I receive is unmatched. Every treatment feels personalized and the results exceed my expectations every time.",
    author: "Diana H.",
    location: "Tallmadge"
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="testimonial-card">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="body-text italic mb-6">
                  {testimonial.text}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-border'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};