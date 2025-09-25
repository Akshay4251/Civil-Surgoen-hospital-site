import React, { useState } from "react";
import { FaPhone, FaGlobe, FaMapMarkerAlt, FaBed, FaHospital } from "react-icons/fa";

const hospitalData = {
  district: [
    {
      name: "Civil Hospital Sindhudurg",
      location: "Oros, Kudal",
      contact: "02362-228901 / 228902",
      capacity: "–",
      website: "#",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["Emergency", "Surgery", "Radiology", "Pathology", "General Medicine", "ICU", "Laboratory"]
    },
  ],
  subDistrict: [
    { 
      name: "Sawantwadi Sub-District Hospital", 
      capacity: "100 Beds", 
      contact: "02363-272062 / 275035",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["General Medicine", "Pediatrics", "Obstetrics", "Surgery", "Emergency"]
    },
    { 
      name: "Kankavali Sub-District Hospital", 
      capacity: "100 Beds", 
      contact: "02367-232058",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["General Medicine", "Orthopedics", "Dentistry", "Surgery", "ICU"] 
    },
    { 
      name: "Vengurla Sub-District Hospital", 
      capacity: "50 Beds", 
      contact: "02366-262235",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["General Medicine", "Maternity", "Emergency", "Pediatrics"]
    },
    { 
      name: "Shiroda Sub-District Hospital", 
      capacity: "50 Beds", 
      contact: "02366-227202",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["General Medicine", "Geriatrics", "Pediatrics", "Emergency"]
    },
  ],
  rural: [
    { 
      name: "Kudal Rural Hospital", 
      capacity: "30 Beds", 
      contact: "02362-222483",
      image: "https://images.unsplash.com/photo-1559000357-f6b52ddfcb90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["Primary Care", "Basic Emergency", "Maternity", "Immunization"]
    },
    { 
      name: "Malvan Rural Hospital", 
      capacity: "30 Beds", 
      contact: "02365-252032",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["Primary Care", "Minor Surgeries", "First Aid", "Vaccination"]
    },
    { 
      name: "Devgad Rural Hospital", 
      capacity: "30 Beds", 
      contact: "02364-262253",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["Primary Care", "Basic Emergency", "Immunization", "Maternal Care"]
    },
    { 
      name: "Dodamarg Rural Hospital", 
      capacity: "30 Beds", 
      contact: "02363-256617",
      image: "https://images.unsplash.com/photo-1575654402784-8be0334c1560?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["Primary Care", "Telemedicine", "Preventive Care", "First Aid"]
    },
    { 
      name: "Katta Rural Hospital", 
      capacity: "30 Beds", 
      contact: "02365-225862 / 225375",
      image: "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["Primary Care", "First Aid", "Health Education", "Immunization"]
    },
    { 
      name: "Vaibhavwadi Rural Hospital", 
      capacity: "30 Beds", 
      contact: "02367-237581",
      image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["Primary Care", "Mother-Child Health", "Counseling", "Vaccination"]
    },
  ],
  special: [
    { 
      name: "District Women & Child Hospital", 
      location: "Kudal",
      capacity: "100 Beds",
      image: "https://images.unsplash.com/photo-1559304787-945aa4341065?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      services: ["Obstetrics", "Gynecology", "Pediatrics", "Neonatal Care", "NICU", "Labor & Delivery"]
    },
  ],
};

// Hospital locations for map
const hospitalLocations = [
  { name: "Civil Hospital Sindhudurg", lat: 15.9932, lng: 73.6889, type: "district" },
  { name: "Sawantwadi", lat: 15.9065, lng: 73.8206, type: "subdistrict" },
  { name: "Kankavali", lat: 16.2641, lng: 73.6862, type: "subdistrict" },
  { name: "Vengurla", lat: 15.8612, lng: 73.6323, type: "subdistrict" },
  { name: "Shiroda", lat: 15.7935, lng: 73.7438, type: "subdistrict" },
  { name: "Malvan", lat: 16.0590, lng: 73.4623, type: "rural" },
  { name: "Devgad", lat: 16.3792, lng: 73.3831, type: "rural" },
  { name: "Dodamarg", lat: 15.8872, lng: 74.0086, type: "rural" },
  { name: "Vaibhavwadi", lat: 16.4641, lng: 73.7386, type: "rural" },
];

// Reusable card component with enhanced UI
function HospitalCard({ name, location, capacity, contact, website, image, services }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group hover:shadow-2xl transform hover:-translate-y-1"
      style={{ height: '400px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
      
      {/* Hospital image with zoom effect on hover */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Hospital info content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white transform transition-all duration-300">
        {/* Capacity badge */}
        <div className="bg-blue-600/30 backdrop-blur-md p-1.5 px-4 rounded-full inline-block mb-3 border border-blue-400/20">
          <div className="flex items-center">
            <FaBed className="mr-2 text-blue-300" />
            <span className="text-sm font-medium">{capacity || "N/A"}</span>
          </div>
        </div>
        
        {/* Hospital name */}
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">{name}</h3>
        
        {/* Location info */}
        {location && (
          <p className="flex items-center text-sm text-gray-300 mb-3">
            <FaMapMarkerAlt className="mr-2 text-blue-300" />
            <span>{location}</span>
          </p>
        )}
        
        {/* Contact info */}
        {contact && (
          <p className="flex items-center text-sm text-gray-200 mb-3">
            <FaPhone className="mr-2 text-blue-300" />
            <span>{contact}</span>
          </p>
        )}
        
        {/* Services section that appears on hover */}
        <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}>
          {services && (
            <div className="mt-3">
              <p className="text-sm font-medium text-blue-300 mb-2">Services:</p>
              <div className="flex flex-wrap gap-1.5">
                {services.slice(0, 5).map((service, idx) => (
                  <span key={idx} className="text-xs bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Website button */}
          {website && website !== "#" && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded-full transition-colors shadow-lg hover:shadow-blue-500/30"
            >
              <FaGlobe className="inline mr-1.5" /> Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Section wrapper component with enhanced styling
function HospitalSection({ title, hospitals, icon }) {
  return (
    <section className="mb-20">
      <div className="flex items-center space-x-4 mb-10">
        <div className="bg-blue-50 p-4 rounded-full text-blue-600 shadow-md shadow-blue-100">
          {icon}
        </div>
        <h2 className="text-3xl font-bold text-gray-800 relative">
          {title}
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600 rounded-full"></span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {hospitals.map((h, idx) => (
          <HospitalCard key={idx} {...h} />
        ))}
      </div>
    </section>
  );
}

export default function SindhudurgHospitalsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with improved parallax effect */}
      <div className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            transform: "translateZ(0)",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <div className="relative z-10 max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                Sindhudurg Healthcare Network
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Complete directory of hospitals and healthcare facilities under the Civil Surgeon Office, serving the people of Sindhudurg district.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#F9FAFB" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Main content with improved spacing */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        {/* Hospital sections */}
        <HospitalSection 
          title="District Hospital" 
          hospitals={hospitalData.district}
          icon={<FaHospital size={28} />}
        />
        <HospitalSection 
          title="Sub-District Hospitals" 
          hospitals={hospitalData.subDistrict}
          icon={<FaHospital size={28} />}
        />
        <HospitalSection 
          title="Rural Hospitals" 
          hospitals={hospitalData.rural}
          icon={<FaHospital size={28} />}
        />
        <HospitalSection 
          title="Special Hospital" 
          hospitals={hospitalData.special}
          icon={<FaHospital size={28} />}
        />

        {/* Map Section with improved styling */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <h2 className="text-3xl font-bold mb-3">Sindhudurg District Hospital Map</h2>
              <p className="text-blue-100 text-lg">Locate all healthcare facilities across the district</p>
            </div>
            <div className="bg-blue-50 p-5 border-b border-blue-100">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-red-500 mr-2 shadow-sm"></div>
                  <span className="text-sm font-medium text-gray-700">District Hospital</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-2 shadow-sm"></div>
                  <span className="text-sm font-medium text-gray-700">Sub-District Hospital</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2 shadow-sm"></div>
                  <span className="text-sm font-medium text-gray-700">Rural Hospital</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mr-2 shadow-sm"></div>
                  <span className="text-sm font-medium text-gray-700">Special Hospital</span>
                </div>
              </div>
            </div>
            <div className="h-[600px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486816.2234251597!2d73.30261905542968!3d16.01257264940721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00162f2c85d0b%3A0x3827e8f3e744730a!2sSindhudurg%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with improved styling */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">About CS Office Sindhudurg</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                The Civil Surgeon Office manages healthcare services across Sindhudurg district, ensuring quality medical care for all residents through a network of district, sub-district, rural and special hospitals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Health Programs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Vaccination Centers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Medical Staff Directory</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Blood Donation Camps</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Contact Information</h3>
              <address className="not-italic text-gray-400 space-y-3">
                <p>Civil Surgeon Office</p>
                <p>District Hospital Campus</p>
                <p>Oros, Kudal, Sindhudurg</p>
                <p>Maharashtra - 416812</p>
                <p className="flex items-center mt-6 text-blue-300">
                  <FaPhone className="mr-3" />
                  02362-228901 / 228902
                </p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Civil Surgeon Office, Sindhudurg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}