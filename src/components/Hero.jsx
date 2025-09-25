import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { icon: Users, value: '50,000+', label: 'Patients Served' },
    { icon: Award, value: '100+', label: 'Expert Doctors' },
    { icon: Clock, value: '24/7', label: 'Emergency Care' },
    { icon: Calendar, value: '50+', label: 'Years of Service' }
  ];

  // Slider images - you can replace these with your actual hospital images
  const sliderImages = [
    {
      url: "./src/assets/slider1.jpg",
      alt: "Hospital Building"
    },
    {
      url: "./src/assets/slider2.jpg",
      alt: "Hospital Reception"
    },
    {
      url: "./src/assets/slider3.jpg",
      alt: "Medical Equipment"
    },
    {
      url: "./src/assets/slider4.jpg",
      alt: "Operation Theater"
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderImages.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderImages.length - 1 : currentSlide - 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Health is Our <span className="text-green-600">Priority</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Civil Surgeon Hospital Sindhudurg provides comprehensive healthcare services 
              with state-of-the-art facilities and experienced medical professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Book Appointment
              </button>
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors">
                Emergency Services
              </button>
            </div>
          </div>
          
          {/* Image Slider */}
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              {/* Slider Images */}
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {sliderImages.map((image, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <stat.icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;