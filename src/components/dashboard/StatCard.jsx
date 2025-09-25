import React from 'react';

const StatCard = ({ icon, title, value, change, changeType }) => {
  const IconComponent = icon;
  const changeColor = changeType === 'increase' ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
        {change && (
          <p className={`text-xs ${changeColor}`}>
            {change} vs last month
          </p>
        )}
      </div>
      <div className="bg-green-100 text-green-600 p-4 rounded-full">
        <IconComponent size={28} />
      </div>
    </div>
  );
};

export default StatCard;