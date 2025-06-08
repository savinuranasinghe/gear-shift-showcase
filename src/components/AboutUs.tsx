
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Award, label: 'Years Experience', value: '25+' },
    { icon: Users, label: 'Happy Customers', value: '50K+' },
    { icon: Clock, label: 'Parts in Stock', value: '100K+' },
    { icon: CheckCircle, label: 'Quality Guarantee', value: '100%' }
  ];

  const features = [
    'Premium Quality Parts',
    'Expert Technical Support',
    'Fast Shipping Worldwide',
    'Competitive Pricing',
    'Warranty on All Products',
    '24/7 Customer Service'
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Stats animation
        gsap.fromTo('.stat-card',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.stats-grid',
              start: 'top 80%',
            }
          }
        );

        // Feature list animation
        gsap.fromTo('.feature-item',
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.features-list',
              start: 'top 80%',
            }
          }
        );

        // Text content animation
        gsap.fromTo('.about-text',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.about-content',
              start: 'top 80%',
            }
          }
        );

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Section */}
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="stat-card text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main About Content */}
        <div className="about-content grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="about-text text-4xl md:text-5xl font-bold text-foreground mb-6">
              About AutoParts Pro
            </h2>
            
            <div className="about-text space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                For over 25 years, AutoParts Pro has been the trusted partner for automotive enthusiasts, 
                professional mechanics, and everyday drivers seeking quality car parts and accessories.
              </p>
              
              <p>
                Our commitment to excellence has made us a leading supplier in the automotive industry, 
                offering an extensive catalog of premium parts from the world's most respected manufacturers.
              </p>
              
              <p>
                Whether you're performing routine maintenance, upgrading performance, or restoring a classic, 
                we have the expertise and inventory to meet your automotive needs.
              </p>
            </div>

            {/* Features List */}
            <div className="features-list">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Why Choose Us
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="about-text relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
              {/* Placeholder for image or graphic */}
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-16 h-16 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  Quality Guaranteed
                </h4>
                <p className="text-muted-foreground">
                  Every part we sell comes with our commitment to quality and performance
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
