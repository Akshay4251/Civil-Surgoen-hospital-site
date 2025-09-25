import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { FiUsers, FiCalendar, FiSettings } from 'react-icons/fi';
import { TbReportMedical } from 'react-icons/tb';

const Sidebar = () => {
  const navItems = [
    { icon: RxDashboard, name: 'Dashboard' },
    { icon: FiUsers, name: 'Patients' },
    { icon: FiCalendar, name: 'Appointments' },
    { icon: TbReportMedical, name: 'Reports' },
    { icon: FiSettings, name: 'Settings' },
  ];

  return (
    <div className="bg-white w-64 h-screen p-4 flex flex-col fixed shadow-lg">
      <div className="flex items-center mb-10">
        <img src="https://img.icons8.com/color/48/000000/caduceus.png" alt="Hospital Logo" className="h-10 w-10 mr-3" />
        <h1 className="text-xl font-bold text-green-700">Civil Hospital</h1>
      </div>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#" className={`flex items-center p-3 my-2 rounded-lg transition-colors ${
                item.name === 'Dashboard' 
                ? 'bg-green-100 text-green-700 font-semibold' 
                : 'text-gray-600 hover:bg-gray-100'
              }`}>
                <item.icon className="mr-4" size={20} />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto p-4 bg-green-50 rounded-lg text-center">
        <p className="text-sm text-green-800">Need help?</p>
        <a href="#" className="text-xs text-green-600 hover:underline">Contact Support</a>
      </div>
    </div>
  );
};

export default Sidebar;