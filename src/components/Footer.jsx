// src/components/Footer.jsx
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold">Civil Surgeon Office, Sindhudurg</h3>
            <p className="mt-2 text-green-200 text-sm">
              Providing accessible and quality healthcare to all citizens.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/doctors" className="hover:text-green-300 transition-colors">Find a Doctor</a></li>
              <li><a href="/services" className="hover:text-green-300 transition-colors">Services</a></li>
              <li><a href="/appointments" className="hover:text-green-300 transition-colors">Appointments</a></li>
              <li><a href="/contact" className="hover:text-green-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>Oros, Sindhudurg, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>(02362) 123-456</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>contact@cssindhudurg.gov.in</span>
              </li>
            </ul>
          </div>
          {/* Emergency */}
          <div className="bg-red-600 p-4 rounded-lg text-center">
             <h4 className="font-bold text-lg">Emergency Numbers</h4>
             <p className="mt-2">24x7 EMERGENCY: <strong>108</strong></p>
             <p>AMBULANCE: <strong>102</strong></p>
             <p>BLOOD BANK: <strong>104</strong></p>
          </div>
        </div>
      </div>
      <div className="bg-green-800 py-4">
        <div className="container mx-auto text-center text-sm text-green-300">
          &copy; {new Date().getFullYear()} Civil Surgeon Office, Sindhudurg. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;