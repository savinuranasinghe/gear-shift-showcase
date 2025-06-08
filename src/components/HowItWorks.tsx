
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Card, CardContent } from '@/components/ui/card';
import { Search, ShoppingCart, Truck, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Search,
      title: 'Browse & Search',
      description: 'Find the exact parts you need using our advanced search filters and categories',
      step: '01'
    },
    {
      icon: ShoppingCart,
      title: 'Select & Order',
      description: 'Add items to your cart and complete your purchase with our secure checkout',
      step: '02'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'We process and ship your order quickly with tracking information provided',
      step: '03'
    },
    {
      icon: CheckCircle,
      title: 'Install & Enjoy',
      description: 'Receive your parts and install them with confidence using our expert guides',
      step: '04'
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Step cards animation
        gsap.fromTo('.step-card',
          { y: 80, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: '.steps-grid',
              start: 'top 80%',
            }
          }
        );

        // Connection lines animation
        gsap.fromTo('.connection-line',
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.steps-grid',
              start: 'top 70%',
            }
          }
        );

        // Floating animation for icons
        gsap.to('.step-icon', {
          y: -5,
          duration: 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.5
        });

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting the right car parts has never been easier. Follow these simple steps to get your vehicle back on the road.
          </p>
        </div>

        <div className="steps-grid relative">
          {/* Desktop Connection Lines */}
          <div className="hidden lg:flex absolute top-24 left-0 right-0 justify-between px-24">
            {[1, 2, 3].map((_, index) => (
              <div 
                key={index}
                className="connection-line h-0.5 bg-gradient-to-r from-primary to-primary/50 flex-1 mx-8 origin-left"
              ></div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="step-card relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30"
              >
                <CardContent className="p-8 text-center">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="step-icon w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Hover Effect Indicator */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Browse our extensive catalog of premium car parts and accessories today.
            </p>
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Start Shopping Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
