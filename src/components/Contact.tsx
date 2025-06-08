
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: ['123 Auto Parts Street', 'Detroit, MI 48201'],
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-4567', 'Toll Free: (800) 123-4567'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@autopartspro.com', 'support@autopartspro.com'],
      color: 'text-orange-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8AM-6PM', 'Sat-Sun: 9AM-5PM'],
      color: 'text-purple-500'
    }
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Contact cards animation
        gsap.fromTo('.contact-card',
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.contact-info',
              start: 'top 80%',
            }
          }
        );

        // Form animation
        gsap.fromTo('.contact-form',
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.contact-form',
              start: 'top 80%',
            }
          }
        );

        // Newsletter animation
        gsap.fromTo('.newsletter-section',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.newsletter-section',
              start: 'top 80%',
            }
          }
        );

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or need expert advice? We're here to help you find the perfect parts for your vehicle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full bg-primary/10 ${info.color}`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Get the latest updates on new products, special offers, and automotive tips delivered to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1"
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
