
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Smooth entrance animations
      gsap.fromTo('.fade-up', 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.fade-up',
            start: 'top 80%',
          }
        }
      );

      // Section reveal animations
      gsap.utils.toArray('.section-reveal').forEach((section: any) => {
        gsap.fromTo(section,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              end: 'bottom 25%',
            }
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <div className="section-reveal">
          <FeaturedProducts />
        </div>
        <div className="section-reveal">
          <AboutUs />
        </div>
        <div className="section-reveal">
          <HowItWorks />
        </div>
        <div className="section-reveal">
          <Testimonials />
        </div>
        <div className="section-reveal">
          <Gallery />
        </div>
        <div className="section-reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
