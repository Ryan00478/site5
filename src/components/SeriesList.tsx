import React, { useState } from 'react';
import { seriesData } from '../data/seriesData';

export const SeriesList: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {seriesData.slice(0, 8).map((series) => (
        <div 
          key={series.id}
          className="relative"
          onMouseEnter={() => setHoveredItem(series.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="py-2 px-3 rounded-lg hover:bg-[#1E1E2F] cursor-pointer transition-colors">
            <h4 className="text-[#B0B0B0] hover:text-white truncate">{series.title}</h4>
          </div>
          
          {/* Hover details */}
          {hoveredItem === series.id && (
            <div className="absolute left-full ml-2 top-0 w-48 bg-[#1E1E2F] rounded-lg shadow-lg p-3 z-10">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#B0B0B0]">Updated:</span>
                  <span className="text-white">{series.updated}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B0B0B0]">Views:</span>
                  <span className="text-white">{series.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B0B0B0]">Rating:</span>
                  <span className="text-white">{series.rating}/5</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};