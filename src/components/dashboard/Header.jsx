import React from 'react';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Welcome, Dr. Sharma!</h2>
        <p className="text-gray-500">Here's the summary of your hospital today.</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button className="relative text-gray-600">
          <FiBell size={24} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3">
            <FiUser size={32} className="p-1.5 bg-gray-200 text-gray-700 rounded-full"/>
            <div>
              <p className="font-semibold text-sm">Dr. A. K. Sharma</p>
              <p className="text-xs text-gray-500">Civil Surgeon</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;