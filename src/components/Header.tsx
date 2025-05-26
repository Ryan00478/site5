import React from 'react';
import { Search, Menu } from 'lucide-react';
import { Route } from '../App';

interface HeaderProps {
  toggleSidebar: () => void;
  currentRoute: Route;
  onRouteChange: (route: Route) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  toggleSidebar, 
  currentRoute, 
  onRouteChange
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#2A2A3B] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => onRouteChange('home')}
        >
          <div className="text-[#FF6B6B] mr-2">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">MangaReader</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Seri ara..."
              className="w-64 py-1 px-3 pr-10 rounded-full bg-[#1E1E2F] border border-gray-700 focus:outline-none focus:border-[#FF6B6B] text-white"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#FF6B6B]">
              <Search size={18} />
            </button>
          </div>
          
          <button 
            className="p-2 rounded-full hover:bg-[#1E1E2F] transition-colors duration-200 text-white"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};