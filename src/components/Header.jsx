import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Search, 
  Globe,
  ChevronDown
} from 'lucide-react';

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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/80px-Emblem_of_India.svg.png"
                    alt="Government of India"
                    className="h-12 w-12 md:h-14 md:w-14 object-contain"
                  />
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIdR25fl-Ok46t__7tMJyx1ukUPE6ucFQAg&s"
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
                <div className="hidden md:block relative">
                  <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="flex items-center space-x-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">{getCurrentLanguageDisplay()}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {isLangDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang)}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-green-50 transition-colors flex justify-between items-center"
                        >
                          <span>{lang.name}</span>
                          <span className="text-gray-500">{lang.display}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search - Desktop */}
                <div className="hidden md:block">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t.search}
                      className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </form>
                </div>

                {/* Mobile Search Toggle */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="md:hidden p-2 text-gray-700 hover:text-green-600"
                >
                  <Search className="w-6 h-6" />
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 text-gray-700 hover:text-green-600"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Search Bar */}
            {isSearchOpen && (
              <div className="md:hidden pb-4 px-2">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.search}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </form>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-green-50 border-t border-green-100">
              <div className="container mx-auto px-4 py-4">
                {/* Ministry Logo - Mobile */}
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ministry_of_Health_and_Family_Welfare.svg/150px-Ministry_of_Health_and_Family_Welfare.svg.png"
                    alt="Ministry of Health"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      item.active 
                        ? 'text-green-600 bg-white' 
                        : 'text-gray-700 hover:text-green-600 hover:bg-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Language Selector - Mobile */}
                <div className="mt-4 pt-4 border-t border-green-200">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm font-medium text-gray-700">{t.language}</span>
                    <select 
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="bg-white border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {languages.map(lang => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name} ({lang.display})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Partner Logos Section - Now separate from sticky header */}
      <div className="bg-white py-2 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {/* Aaple Sarkar Logo */}
            <div className="flex items-center">
              <img 
                src="https://images.seeklogo.com/logo-png/42/1/aaple-sarkar-logo-png_seeklogo-429720.png"
                alt="Aaple Sarkar"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
            
            {/* Ministry of Health Logo */}
            <div className="flex items-center">
              <img 
                src="./src/assets/image1.png"
                alt="Ministry of Health and Family Welfare"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
            
            {/* Digital India Logo */}
            <div className="flex items-center">
              <img 
                src="./src/assets/image.png"
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