import React from 'react';
import StatCard from './dashboard/StatCard';
import PatientChart from './dashboard/PatientChart';
import DepartmentPieChart from './dashboard/DepartmentPieChart';
import RecentAdmissions from './dashboard/RecentAdmissions';
import Sidebar from './Sidebar';
import Header from './dashboard/Header';
import { FiUsers, FiUserPlus, FiClock } from 'react-icons/fi';
import { FaBed } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Header />
        
        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={FiUsers} 
            title="Total Patients Today" 
            value="1,250" 
            change="+5%" 
            changeType="increase" 
          />
          <StatCard 
            icon={FiUserPlus} 
            title="New Admissions" 
            value="85" 
            change="-2%" 
            changeType="decrease" 
          />
          <StatCard 
            icon={FaBed} 
            title="Bed Occupancy" 
            value="75%" 
            change="+1.5%" 
            changeType="increase" 
          />
          <StatCard 
            icon={FiClock} 
            title="Avg. Wait Time" 
            value="25 min" 
            change="+3 min" 
            changeType="decrease" 
          />
        </div>
        
        {/* Charts and Tables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <PatientChart />
          </div>
          <div>
            <DepartmentPieChart />
          </div>
        </div>

        <RecentAdmissions />
      </main>
    </div>
  );
};

export default Dashboard;