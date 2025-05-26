import React, { useEffect } from 'react';
import { X, Home, BookOpen, FileText, Mail, AlertTriangle } from 'lucide-react';
import { Route } from '../App';
import { seriesData } from '../data/seriesData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentRoute: Route;
  onRouteChange: (route: Route) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onClose, 
  currentRoute,
  onRouteChange
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      <aside 
        className={`fixed top-0 left-0 h-full w-80 bg-[#2A2A3B] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Menü</h2>
            <button 
              className="p-1 rounded-full hover:bg-[#1E1E2F] text-gray-300 hover:text-white transition-colors"
              onClick={onClose}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#FFD93D] mb-3">Kategoriler</h3>
              <nav className="space-y-2">
                <SidebarLink 
                  icon={<Home size={20} />} 
                  label="Ana Sayfa" 
                  isActive={currentRoute === 'home'}
                  onClick={() => onRouteChange('home')}
                />
                <SidebarLink 
                  icon={<BookOpen size={20} />} 
                  label="Seriler" 
                  isActive={currentRoute === 'series'}
                  onClick={() => onRouteChange('series')}
                />
                <SidebarLink 
                  icon={<FileText size={20} />} 
                  label="Sözleşme" 
                  isActive={currentRoute === 'contract'}
                  onClick={() => onRouteChange('contract')}
                />
                <SidebarLink 
                  icon={<Mail size={20} />} 
                  label="İletişim" 
                  isActive={currentRoute === 'contact'}
                  onClick={() => onRouteChange('contact')}
                />
                <SidebarLink 
                  icon={<AlertTriangle size={20} />} 
                  label="Sorumluluk Reddi" 
                  isActive={currentRoute === 'disclaimer'}
                  onClick={() => onRouteChange('disclaimer')}
                />
              </nav>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[...seriesData]
                .sort((a, b) => b.views - a.views)
                .slice(0, 6)
                .map((series) => (
                  <div 
                    key={series.id} 
                    className="bg-[#1E1E2F] rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-transform duration-200"
                  >
                    <img 
                      src={series.coverImage} 
                      alt={series.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-2">
                      <h4 className="text-white text-sm truncate">{series.title}</h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ 
  icon, 
  label, 
  isActive,
  onClick
}) => {
  return (
    <button 
      className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-[#FF6B6B] text-white' 
          : 'text-[#B0B0B0] hover:bg-[#1E1E2F] hover:text-white'
      }`}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </button>
  );
};