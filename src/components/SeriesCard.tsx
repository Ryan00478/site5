import React from 'react';
import { Series } from '../types/series';

interface SeriesCardProps {
  series: Series;
}

export const SeriesCard: React.FC<SeriesCardProps> = ({ series }) => {
  return (
    <div className="bg-[#2A2A3B] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative pb-[140%]">
        <img 
          src={series.coverImage} 
          alt={series.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
              series.status === 'Ongoing' 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-500 text-white'
            }`}>
              {series.status}
            </span>
            <span className={`px-2 py-0.5 text-xs rounded-full font-medium bg-purple-500 text-white`}>
              {series.type}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-white text-lg mb-1 line-clamp-2">{series.title}</h3>
        
        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="text-[#B0B0B0]">{series.chapters} chapters</span>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-white">{series.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};