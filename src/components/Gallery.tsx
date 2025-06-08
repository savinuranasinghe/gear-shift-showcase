
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Engine', 'Brakes', 'Suspension', 'Lighting', 'Interior'];
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      title: 'Performance Engine Components',
      category: 'Engine',
      description: 'High-performance engine parts for maximum power'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      title: 'Premium Brake Systems',
      category: 'Brakes',
      description: 'Advanced braking solutions for safety and performance'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      title: 'Suspension Upgrades',
      category: 'Suspension',
      description: 'Complete suspension systems for improved handling'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      title: 'LED Lighting Solutions',
      category: 'Lighting',
      description: 'Modern LED lighting for enhanced visibility'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
      title: 'Interior Accessories',
      category: 'Interior',
      description: 'Premium interior components and accessories'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      title: 'Turbo Systems',
      category: 'Engine',
      description: 'Complete turbo charging solutions'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      title: 'Racing Brakes',
      category: 'Brakes',
      description: 'Professional racing brake components'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      title: 'Coilover Kits',
      category: 'Suspension',
      description: 'Adjustable coilover suspension systems'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Gallery items animation
        gsap.fromTo('.gallery-item',
          { y: 60, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: '.gallery-grid',
              start: 'top 80%',
            }
          }
        );

        // Category buttons animation
        gsap.fromTo('.category-btn',
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.category-filters',
              start: 'top 90%',
            }
          }
        );

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    // Re-animate items when category changes
    gsap.fromTo('.gallery-item',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out'
      }
    );
  }, [activeCategory]);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Parts Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of premium car parts and accessories
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="category-btn"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="gallery-item group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(item.image)}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery Item"
                className="max-w-full max-h-full object-contain"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Need Help Finding the Right Part?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Our expert team is here to help you find the perfect components for your vehicle.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
