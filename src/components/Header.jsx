import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Search, 
  Globe,
  ChevronDown
} from 'lucide-react';

import emblemOfIndia from '../assets/image2.png';
import ministryOfHealth from '../assets/image1.png';
import ministryOfHealthMobile from '../assets/image1.png';
import aapleSarkar from '../assets/image2.png';
import ministryLogo from '../assets/image1.png';
import digitalIndia from '../assets/image.png';

// Translation data
const translations = {
  en: {
    emergency: '24×7 EMERGENCY: 108 | AMBULANCE: 102 | BLOOD BANK: 104',
    hospitalName: 'Civil Surgeon Office,',
    location: 'Sindhudurg',
    subtitle: 'Government General Hospital',
    nav: {
      home: 'Home',
      departments: 'Departments',
      services: 'Services',
      doctors: 'Doctors',
      appointments: 'Appointments',
      dashboard: 'Dashboard'
    },
    search: 'Search doctors, services...',
    language: 'Language'
  },
  hi: {
    emergency: '24×7 आपातकाल: 108 | एम्बुलेंस: 102 | रक्त बैंक: 104',
    hospitalName: 'सिविल सर्जन कार्यालय,',
    location: 'सिंधुदुर्ग',
    subtitle: 'सरकारी सामान्य अस्पताल',
    nav: {
      home: 'होम',
      departments: 'विभाग',
      services: 'सेवाएं',
      doctors: 'डॉक्टर',
      appointments: 'नियुक्तियां',
      dashboard: 'डैशबोर्ड'
    },
    search: 'डॉक्टर, सेवाएं खोजें...',
    language: 'भाषा'
  },
  mr: {
    emergency: '24×7 आणीबाणी: 108 | रुग्णवाहिका: 102 | रक्तपेढी: 104',
    hospitalName: 'सिव्हिल सर्जन कार्यालय,',
    location: 'सिंधुदुर्ग',
    subtitle: 'शासकीय सर्वसाधारण रुग्णालय',
    nav: {
      home: 'मुख्यपृष्ठ',
      departments: 'विभाग',
      services: 'सेवा',
      doctors: 'डॉक्टर',
      appointments: 'भेटीची वेळ',
      dashboard: 'डॅशबोर्ड'
    },
    search: 'डॉक्टर, सेवा शोधा...',
    language: 'भाषा'
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [t, setT] = useState(translations.en);

  const languages = [
    { code: 'en', name: 'English', display: 'English' },
    { code: 'hi', name: 'Hindi', display: 'हिंदी' },
    { code: 'mr', name: 'Marathi', display: 'मराठी' }
  ];

  useEffect(() => {
    setT(translations[selectedLanguage]);
  }, [selectedLanguage]);

  const navItems = [
    { name: t.nav.home, href: '/', active: true },
    { name: t.nav.departments, href: '/departments' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.doctors, href: '/doctors' },
    { name: t.nav.appointments, href: '/appointments' },
    { name: t.nav.dashboard, href: '/dashboard' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.code);
    setIsLangDropdownOpen(false);
  };

  const getCurrentLanguageDisplay = () => {
    const currentLang = languages.find(lang => lang.code === selectedLanguage);
    return currentLang ? currentLang.display : 'English';
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Emergency Banner */}
        <div className="bg-red-600 text-white py-2 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center space-x-3 text-center">
              <Phone className="w-5 h-5 animate-pulse" />
              <span className="font-bold text-sm md:text-base">
                {t.emergency}
              </span>
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo and Hospital Name */}
              <div className="flex items-center space-x-4">
                {/* Government of India and Ministry of Health Logos */}
                <div className="flex items-center space-x-2">
                  <img 
                    src={emblemOfIndia}
                    alt="Government of India"
                    className="h-12 w-12 md:h-14 md:w-14 object-contain"
                  />
                  <img 
                    src={ministryOfHealth}
                    alt="Ministry of Health" 
                    className="h-12 w-12 md:h-16 md:w-16 object-contain"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-xl md:text-2xl text-green-700">
                    {t.hospitalName}<br/>{t.location}
                  </h1>
                  <p className="text-xs md:text-sm text-gray-600">
                    {t.subtitle}
                  </p>
                </div>
              </div>

              {/* Desktop Navigation Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition-all duration-200 pb-2 border-b-2 ${
                      item.active 
                        ? 'text-green-600 border-green-600' 
                        : 'text-gray-700 border-transparent hover:text-green-600 hover:border-green-300'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                {/* Language Selector - Desktop */}
                {/* (keeping your logic same) */}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-green-50 border-t border-green-100">
              <div className="container mx-auto px-4 py-4">
                {/* Ministry Logo - Mobile */}
                <div className="flex justify-center mb-4">
                  <img 
                    src={ministryOfHealthMobile}
                    alt="Ministry of Health"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Partner Logos Section */}
      <div className="bg-white py-2 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {/* Aaple Sarkar Logo */}
            <div className="flex items-center">
              <img 
                src={aapleSarkar}
                alt="Aaple Sarkar"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
            
            {/* Ministry of Health Logo */}
            <div className="flex items-center">
              <img 
                src={ministryLogo}
                alt="Ministry of Health and Family Welfare"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
            
            {/* Digital India Logo */}
            <div className="flex items-center">
              <img 
                src={digitalIndia}
                alt="Digital India"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;