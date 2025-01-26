import React from 'react';
import {
  BarChart3,
  Users,
  ShoppingCart,
  Boxes,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';

function Dashboard() {
  const stats = [
    {
      title: 'Total Sales',
      value: '₹45,231',
      change: '+12.5%',
      icon: ShoppingCart,
      trend: 'up',
    },
    {
      title: 'Active Users',
      value: '2,345',
      change: '+3.2%',
      icon: Users,
      trend: 'up',
    },
    {
      title: 'Inventory Items',
      value: '1,234',
      change: '-2.1%',
      icon: Boxes,
      trend: 'down',
    },
  ];

  const alerts = [
    {
      title: 'Low Stock Alert',
      message: '5 items below reorder level',
      type: 'warning',
    },
    {
      title: 'New Orders',
      message: '3 orders pending approval',
      type: 'info',
    },
    {
      title: 'System Update',
      message: 'New features available',
      type: 'success',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <stat.icon className="text-blue-600" size={24} />
              </div>
              {stat.trend === 'up' ? (
                <TrendingUp className="text-green-500" size={20} />
              ) : (
                <TrendingUp className="text-red-500 transform rotate-180" size={20} />
              )}
            </div>
            <h3 className="text-gray-600 font-medium">{stat.title}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            <p className={`text-sm mt-2 ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          System Alerts
        </h2>
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <AlertCircle
                className={`${
                  alert.type === 'warning'
                    ? 'text-orange-500'
                    : alert.type === 'success'
                    ? 'text-green-500'
                    : 'text-blue-500'
                }`}
                size={20}
              />
              <div>
                <h3 className="font-medium text-gray-900">{alert.title}</h3>
                <p className="text-gray-600">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;