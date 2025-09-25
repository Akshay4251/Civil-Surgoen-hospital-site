import React from 'react';

const admissions = [
  { name: 'John Doe', age: 45, department: 'Cardiology', time: '10:30 AM' },
  { name: 'Jane Smith', age: 34, department: 'Orthopedics', time: '11:15 AM' },
  { name: 'Sam Wilson', age: 28, department: 'Neurology', time: '11:45 AM' },
  { name: 'Alice Brown', age: 5, department: 'Pediatrics', time: '12:05 PM' },
];

const RecentAdmissions = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Patient Admissions</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Patient Name</th>
              <th scope="col" className="px-6 py-3">Department</th>
              <th scope="col" className="px-6 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {admissions.map((patient, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{patient.name}</td>
                <td className="px-6 py-4">{patient.department}</td>
                <td className="px-6 py-4">{patient.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentAdmissions;