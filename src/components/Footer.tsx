import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A2A3B] border-t border-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">MangaReader</h3>
          <p className="text-[#B0B0B0] max-w-md">
            En sevdiğiniz manga ve manhwa serilerini dilediğiniz zaman, dilediğiniz yerde okuyun.
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-[#B0B0B0]">
          <p>© {new Date().getFullYear()} MangaReader. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};