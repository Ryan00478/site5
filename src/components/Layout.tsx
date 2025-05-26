import React, { useState, ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Announcement } from './Announcement';
import { Footer } from './Footer';
import { Route } from '../App';

interface LayoutProps {
  children: ReactNode;
  currentRoute: Route;
  onRouteChange: (route: Route) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentRoute, 
  onRouteChange 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white flex flex-col">
      <Header 
        toggleSidebar={toggleSidebar} 
        currentRoute={currentRoute}
        onRouteChange={onRouteChange}
      />
      
      <Announcement />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        currentRoute={currentRoute}
        onRouteChange={(route) => {
          onRouteChange(route);
          setIsSidebarOpen(false);
        }}
      />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};