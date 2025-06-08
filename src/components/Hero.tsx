
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Howl } from 'howler';
import { Button } from '@/components/ui/button';
import { Play, Volume2 } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [engineSound, setEngineSound] = useState<Howl | null>(null);

  useEffect(() => {
    // Initialize engine sound
    const sound = new Howl({
      src: ['data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+XwtGIcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+XxtGIcBjiS2PLNeSsFJHfH8N2QQAoUXrTp66hVFApGn+XxtGIcBjiS2PLNeSsFJHfH8N2QQAoUXrTp66hVFApGn+XxtGIcBjiS2PLNeSsFJHfH8N2QQAoUXrTp66hVFApGn+XxtGIcBjiS2PLNeSsFJHfH8N2QQAoUXrTp66hVFApGn+Xxt'],
      volume: 0.3,
      loop: false,
    });
    setEngineSound(sound);

    return () => {
      sound.unload();
    };
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        // Hero entrance animation
        gsap.fromTo('.hero-title',
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 }
        );

        gsap.fromTo('.hero-subtitle',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.6 }
        );

        gsap.fromTo('.hero-cta',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.9 }
        );

        // Car animation
        gsap.fromTo(carRef.current,
          { x: '-100%', rotation: -10 },
          { x: '0%', rotation: 0, duration: 2, ease: 'power2.out', delay: 0.5 }
        );

        // Floating animation for car
        gsap.to(carRef.current, {
          y: -10,
          duration: 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: 2.5
        });

      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  const handleEngineStart = () => {
    if (engineSound && !audioPlayed) {
      engineSound.play();
      setAudioPlayed(true);

      // Add shake animation to car on sound
      if (carRef.current) {
        gsap.to(carRef.current, {
          rotation: 2,
          duration: 0.1,
          yoyo: true,
          repeat: 5,
          ease: 'power2.inOut'
        });
      }
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Premium
              <span className="text-primary block">Car Parts</span>
              <span className="text-white">& Accessories</span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-lg">
              Quality automotive parts for every make and model. Performance, reliability, and style in every component.
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Shop Car Parts
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
                onClick={handleEngineStart}
              >
                {audioPlayed ? <Volume2 className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
                {audioPlayed ? 'Engine Sound' : 'Start Engine'}
              </Button>
            </div>
          </div>

          {/* Car Visual */}
          <div className="relative">
            <div 
              ref={carRef}
              className="relative w-full h-96 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full flex items-center justify-center"
            >
              {/* Car Icon/Animation Placeholder */}
              <div className="w-64 h-32 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <svg 
                  className="w-48 h-24 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              
              {/* Exhaust Effect */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <div className="w-16 h-2 bg-gradient-to-r from-gray-400 to-transparent rounded-full opacity-60 animate-pulse"></div>
                <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-transparent rounded-full mt-1 opacity-40 animate-pulse"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
