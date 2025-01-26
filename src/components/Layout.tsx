import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  ShoppingCart,
  Boxes,
  FileText,
  Settings,
  LogOut,
} from 'lucide-react';
import { useAuthStore } from '../store/auth';
import type { NavigationItem } from '../types';

const navigation: NavigationItem[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
    permissions: ['all'],
  },
  {
    id: 'users',
    name: 'Users & HR',
    path: '/users',
    icon: Users,
    permissions: ['admin', 'hr'],
  },
  {
    id: 'sales',
    name: 'Sales',
    path: '/sales',
    icon: ShoppingCart,
    permissions: ['admin', 'sales'],
  },
  {
    id: 'inventory',
    name: 'Inventory',
    path: '/inventory',
    icon: Boxes,
    permissions: ['admin', 'inventory'],
  },
  {
    id: 'finance',
    name: 'Finance',
    path: '/finance',
    icon: FileText,
    permissions: ['admin', 'finance'],
  },
  {
    id: 'settings',
    name: 'Settings',
    path: '/settings',
    icon: Settings,
    permissions: ['admin'],
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed lg:relative w-64 h-screen bg-white border-r border-gray-200 transition-transform duration-200 ease-in-out z-30`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h1 className="text-xl font-bold text-gray-800">Workspacial ERP</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-50"
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </button>
          ))}
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 text-red-600 hover:bg-red-50 mt-8"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.email}
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;