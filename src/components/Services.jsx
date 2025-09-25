// components/Services.jsx
import React from 'react';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye,
  Pill,
  Activity
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary healthcare services for all age groups'
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced cardiac care with modern diagnostic equipment'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological treatment and rehabilitation services'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Bone, joint, and musculoskeletal disorder treatments'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services including surgery'
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: '24/7 pharmacy with all essential medications'
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: 'Round-the-clock emergency and trauma services'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of medical services with state-of-the-art facilities
            and experienced healthcare professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <service.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;