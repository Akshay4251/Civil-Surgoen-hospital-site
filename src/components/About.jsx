import React from 'react';

const About = () => {
  const teamMembers = {
    leadership: {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Civil Surgeon",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      description: "With over 25 years of experience in public health administration, Dr. Kumar leads our hospital with dedication to community healthcare. He specializes in preventive medicine and has implemented numerous health programs for rural development.",
      subordinates: [
        {
          id: 2,
          name: "Dr. Priya Sharma",
          role: "Deputy Civil Surgeon",
          image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
          description: "Dr. Sharma brings 15 years of expertise in maternal and child health services. She oversees immunization programs and coordinates with district health initiatives to ensure quality healthcare delivery.",
          subordinates: [
            {
              id: 3,
              name: "Dr. Amit Patel",
              role: "Medical Officer",
              image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
              description: "Specializing in emergency medicine and trauma care, Dr. Patel manages our 24/7 emergency services. He has successfully handled numerous critical cases and trains junior staff in emergency protocols."
            },
            {
              id: 4,
              name: "Dr. Sunita Verma",
              role: "Senior Medical Officer",
              image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
              description: "Dr. Verma heads our outpatient department and specializes in general medicine. She is known for her patient-centric approach and has been instrumental in organizing health camps in remote areas."
            }
          ]
        },
        {
          id: 5,
          name: "Mrs. Anita Singh",
          role: "Chief Nursing Officer",
          image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop",
          description: "With 20 years in nursing administration, Mrs. Singh ensures the highest standards of patient care. She manages our nursing staff and has implemented quality improvement initiatives across all departments."
        },
        {
          id: 6,
          name: "Mr. Vikram Mehta",
          role: "Hospital Administrator",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
          description: "Mr. Mehta oversees the administrative operations ensuring smooth functioning of all departments. His expertise in healthcare management has improved efficiency and patient satisfaction rates significantly."
        }
      ]
    }
  };

  const TeamMemberCard = ({ member, level = 0 }) => {
    const levelStyles = {
      0: "bg-blue-600 text-white",
      1: "bg-blue-500 text-white",
      2: "bg-blue-400 text-white"
    };

    return (
      <div className="flex flex-col items-center">
        <div className={`rounded-lg shadow-xl p-6 ${level === 0 ? 'w-80' : 'w-72'} transform hover:scale-105 transition-transform duration-300`}>
          <div className="flex flex-col items-center">
            <img 
              src={member.image} 
              alt={member.name}
              className={`${level === 0 ? 'w-32 h-32' : 'w-24 h-24'} rounded-full object-cover border-4 border-white shadow-lg mb-4`}
            />
            <h3 className={`text-lg font-bold mb-1 ${levelStyles[level]?.includes('text-white') ? 'text-white' : 'text-gray-900'}`}>
              {member.name}
            </h3>
            <p className={`text-sm font-medium mb-3 ${levelStyles[level]} px-3 py-1 rounded-full`}>
              {member.role}
            </p>
            <p className="text-gray-700 text-sm text-center leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>
        
        {member.subordinates && member.subordinates.length > 0 && (
          <div className="mt-8">
            {/* Connecting line */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gray-400"></div>
            </div>
            
            {/* Horizontal line for multiple subordinates */}
            {member.subordinates.length > 1 && (
              <div className="flex items-center justify-center">
                <div className="h-0.5 bg-gray-400" style={{ width: `${member.subordinates.length * 200}px` }}></div>
              </div>
            )}
            
            {/* Subordinates */}
            <div className="flex gap-8 justify-center">
              {member.subordinates.map((subordinate, index) => (
                <div key={subordinate.id} className="flex flex-col items-center">
                  {/* Vertical line from horizontal line to card */}
                  {member.subordinates.length > 1 && (
                    <div className="w-0.5 h-8 bg-gray-400"></div>
                  )}
                  <TeamMemberCard member={subordinate} level={level + 1} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Leadership Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated healthcare professionals leading our hospital's mission to provide 
            exceptional medical services to the community.
          </p>
        </div>

        {/* Hierarchical Organization Chart */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 mb-16 overflow-x-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Organizational Structure</h2>
          <div className="flex justify-center min-w-max">
            <TeamMemberCard member={teamMembers.leadership} level={0} />
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Healthcare Excellence</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We are committed to providing comprehensive healthcare services to all sections of society, 
              with special focus on preventive care and health education. Our team works tirelessly to 
              ensure that quality medical care reaches every individual in our district.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Community Service</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Through regular health camps, immunization drives, and awareness programs, we actively 
              engage with the community. Our goal is to create a healthier society by addressing both 
              immediate medical needs and long-term public health challenges.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-gray-600">Years of Service</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
            <div className="text-gray-600">Patients Served</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-gray-600">Healthcare Staff</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Emergency Services</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;