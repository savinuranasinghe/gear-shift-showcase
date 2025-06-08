
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Mike Rodriguez',
      role: 'Professional Mechanic',
      rating: 5,
      text: 'AutoParts Pro has been my go-to supplier for over 10 years. Their quality is unmatched and the customer service is exceptional. Every part I order arrives exactly as described.',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Car Enthusiast',
      rating: 5,
      text: 'I\'ve restored three classic cars using parts from AutoParts Pro. Their extensive catalog and expert advice helped me find even the most obscure components.',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'David Thompson',
      role: 'Fleet Manager',
      rating: 5,
      text: 'Managing a fleet of 50+ vehicles requires reliable parts suppliers. AutoParts Pro consistently delivers quality parts on time, helping us maintain our uptime.',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Lisa Martinez',
      role: 'DIY Car Owner',
      rating: 5,
      text: 'As someone who likes to work on my own car, I appreciate the detailed product descriptions and installation guides. The parts always fit perfectly.',
      image: '/placeholder.svg'
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Initial animation for visible testimonials
        gsap.fromTo('.testimonial-card',
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            }
          }
        );

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    // Auto-advance slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what automotive professionals and enthusiasts think about our products and service.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative mb-12">
          <Card className="testimonial-card max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentSlide].rating)}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 italic">
                    "{testimonials[currentSlide].text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials[currentSlide].name}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonials[currentSlide].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: '50K+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '99%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
