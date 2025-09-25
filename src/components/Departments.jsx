// components/Departments.jsx
import React from 'react';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye,
  Microscope,
  Activity,
  Pill,
  Users,
  Syringe,
  Zap,
  ChevronRight
} from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      icon: Activity,
      name: 'Emergency & Casualty',
      description: '24x7 emergency services with trauma care unit',
      services: ['Trauma Care', 'Accident Cases', 'Critical Care', 'Ambulance Service'],
      timing: '24 Hours',
      color: 'red'
    },
    {
      icon: Stethoscope,
      name: 'General Medicine',
      description: 'Comprehensive healthcare for common illnesses and chronic conditions',
      services: ['OPD Services', 'Fever Clinic', 'Diabetes Care', 'Hypertension Management'],
      timing: '9:00 AM - 5:00 PM',
      color: 'blue'
    },
    {
      icon: Heart,
      name: 'Cardiology',
      description: 'Complete cardiac care with ECG and 2D Echo facilities',
      services: ['ECG', '2D Echo', 'Cardiac Consultation', 'Heart Disease Management'],
      timing: '9:00 AM - 2:00 PM',
      color: 'pink'
    },
    {
      icon: Baby,
      name: 'Obstetrics & Gynecology',
      description: 'Maternal healthcare and womens health services',
      services: ['Antenatal Care', 'Delivery Services', 'Family Planning', 'Gynec OPD'],
      timing: '24 Hours',
      color: 'purple'
    },
    {
      icon: Users,
      name: 'Pediatrics',
      description: 'Child healthcare from newborn to adolescence',
      services: ['Immunization', 'Growth Monitoring', 'NICU', 'Pediatric OPD'],
      timing: '9:00 AM - 5:00 PM',
      color: 'yellow'
    },
    {
      icon: Bone,
      name: 'Orthopedics',
      description: 'Bone and joint care with fracture management',
      services: ['Fracture Treatment', 'Joint Replacement', 'Physiotherapy', 'Plaster Room'],
      timing: '9:00 AM - 2:00 PM',
      color: 'orange'
    },
    {
      icon: Brain,
      name: 'Psychiatry',
      description: 'Mental health services and counseling',
      services: ['Counseling', 'De-addiction', 'Mental Health OPD', 'Psychology Services'],
      timing: '10:00 AM - 2:00 PM',
      color: 'indigo'
    },
    {
      icon: Eye,
      name: 'Ophthalmology',
      description: 'Complete eye care including cataract surgery',
      services: ['Eye Examination', 'Cataract Surgery', 'Refraction', 'Eye Emergency'],
      timing: '9:00 AM - 2:00 PM',
      color: 'teal'
    },
    {
      icon: Microscope,
      name: 'Laboratory Services',
      description: 'All pathology and diagnostic services',
      services: ['Blood Tests', 'Urine Tests', 'X-Ray', 'Sonography'],
      timing: '8:00 AM - 8:00 PM',
      color: 'green'
    },
    {
      icon: Pill,
      name: 'Pharmacy',
      description: 'Free medicine distribution under government schemes',
      services: ['Generic Medicines', 'Emergency Drugs', 'Surgical Items', 'IV Fluids'],
      timing: '24 Hours',
      color: 'cyan'
    },
    {
      icon: Syringe,
      name: 'Immunization',
      description: 'Vaccination services for all age groups',
      services: ['Child Vaccination', 'Adult Vaccination', 'Travel Vaccination', 'COVID-19 Vaccine'],
      timing: '9:00 AM - 4:00 PM',
      color: 'lime'
    },
    {
      icon: Zap,
      name: 'Physiotherapy',
      description: 'Rehabilitation and physical therapy services',
      services: ['Post-surgery Rehab', 'Sports Injury', 'Paralysis Care', 'Pain Management'],
      timing: '9:00 AM - 5:00 PM',
      color: 'amber'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600',
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600',
      pink: 'bg-pink-100 text-pink-600 group-hover:bg-pink-600',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600',
      yellow: 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600',
      teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600',
      cyan: 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600',
      lime: 'bg-lime-100 text-lime-600 group-hover:bg-lime-600',
      amber: 'bg-amber-100 text-amber-600 group-hover:bg-amber-600'
    };
    return colors[color] || colors.green;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hospital <span className="text-green-600">Departments</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our hospital offers comprehensive healthcare services across multiple specialties 
            with experienced doctors and modern facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${getColorClasses(dept.color)} group-hover:text-white transition-colors`}>
                    <dept.icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {dept.timing}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {dept.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold text-gray-700">Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {dept.services.map((service, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">View Details</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;