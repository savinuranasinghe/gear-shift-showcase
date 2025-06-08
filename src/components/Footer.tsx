
import React from 'react';
import { Car, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      'Engine Parts',
      'Brake Systems',
      'Suspension',
      'Lighting',
      'Interior',
      'Exterior'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Press',
      'Blog',
      'Partners'
    ],
    support: [
      'Help Center',
      'Installation Guides',
      'Warranty',
      'Returns',
      'Shipping Info',
      'Contact Us'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR',
      'Accessibility',
      'Sitemap'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Car className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">AutoParts Pro</span>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner for premium automotive parts and accessories. 
                Quality, performance, and reliability in every component we sell.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-gray-300">123 Auto Parts Street, Detroit, MI 48201</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-gray-300">info@autopartspro.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} AutoParts Pro. All rights reserved.
            </div>

            {/* Certifications/Badges */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>Secure Payments</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span>Fast Shipping</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span>Quality Guaranteed</span>
              </span>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
