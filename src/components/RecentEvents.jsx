// src/components/RecentEvents.jsx

import React, { useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import icons
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Dummy data for event images (replace with your actual event data)
const events = [
  { id: 1, image: './src/assets/slider1.jpg' },
  { id: 2, image: './src/assets/slider2.jpg' },
  { id: 3, image: './src/assets/slider3.jpg' },
  { id: 4, image: './src/assets/slider4.jpg' },
];

const RecentEvents = () => {
  // Create refs for the navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-green-50 py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Title, Subtitle, and Navigation */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Recent Events
            </h2>
            <p className="text-lg text-green-700 mb-8">
              Stay Updated with Latest Updates and Announcements
            </p>
            <div className="hidden lg:flex items-center gap-4">
              <button
                ref={prevRef}
                className="bg-white hover:bg-green-100 text-green-800 p-3 rounded-full transition-colors duration-300 shadow-md"
                aria-label="Previous Slide"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                ref={nextRef}
                className="bg-white hover:bg-green-100 text-green-800 p-3 rounded-full transition-colors duration-300 shadow-md"
                aria-label="Next Slide"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Column: Image Carousel */}
          <div className="lg:col-span-8 w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{
                el: '.swiper-pagination-custom',
                clickable: true,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              // This is necessary to link the custom buttons to Swiper's navigation
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="!pb-12" // Add padding-bottom to make space for pagination
            >
              {events.map((event) => (
                <SwiperSlide key={event.id}>
                  <div className="group overflow-hidden rounded-xl shadow-lg h-72">
                    <img
                      src={event.image}
                      alt={`Event ${event.id}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Pagination container */}
            <div className="swiper-pagination-custom flex justify-center mt-6 gap-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;