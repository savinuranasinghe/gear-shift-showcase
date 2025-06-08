
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: 'Performance Brake Pads',
      price: '$89.99',
      rating: 4.8,
      image: '/placeholder.svg',
      category: 'Brakes',
      description: 'High-performance ceramic brake pads for superior stopping power'
    },
    {
      id: 2,
      name: 'Premium Oil Filter',
      price: '$24.99',
      rating: 4.9,
      image: '/placeholder.svg',
      category: 'Engine',
      description: 'Advanced filtration technology for optimal engine protection'
    },
    {
      id: 3,
      name: 'LED Headlight Kit',
      price: '$159.99',
      rating: 4.7,
      image: '/placeholder.svg',
      category: 'Lighting',
      description: 'Ultra-bright LED headlights with easy installation'
    },
    {
      id: 4,
      name: 'Performance Air Filter',
      price: '$45.99',
      rating: 4.6,
      image: '/placeholder.svg',
      category: 'Engine',
      description: 'High-flow air filter for improved engine performance'
    },
    {
      id: 5,
      name: 'Shock Absorbers Set',
      price: '$299.99',
      rating: 4.8,
      image: '/placeholder.svg',
      category: 'Suspension',
      description: 'Premium shock absorbers for smooth ride quality'
    },
    {
      id: 6,
      name: 'Spark Plug Set',
      price: '$79.99',
      rating: 4.9,
      image: '/placeholder.svg',
      category: 'Engine',
      description: 'High-performance spark plugs for optimal ignition'
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Stagger animation for product cards
        gsap.fromTo('.product-card',
          { y: 80, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            }
          }
        );

        // Add hover animations
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              rotation: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        });

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our top-rated car parts and accessories, trusted by automotive enthusiasts worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="product-card group cursor-pointer overflow-hidden border-2 hover:border-primary/50 transition-colors duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </CardTitle>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.rating})
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform duration-300"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-4">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
