import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  filter: {
    genre: string;
    status: string;
    type: string;
    sort: string;
  };
  setFilter: React.Dispatch<React.SetStateAction<{
    genre: string;
    status: string;
    type: string;
    sort: string;
  }>>;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => {
  return (
    <div className="bg-[#2A2A3B] rounded-lg p-4 mb-6">
      <div className="flex items-center mb-4">
        <Filter size={20} className="text-[#FF6B6B] mr-2" />
        <h2 className="text-lg font-semibold text-white">Filters</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-[#B0B0B0] mb-2 text-sm">Genre</label>
          <div className="relative">
            <select
              value={filter.genre}
              onChange={(e) => setFilter({ ...filter, genre: e.target.value })}
              className="w-full bg-[#1E1E2F] border border-gray-700 rounded-lg py-2 px-3 text-white appearance-none focus:outline-none focus:border-[#FF6B6B]"
            >
              <option value="">All Genres</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Slice of Life">Slice of Life</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        <div>
          <label className="block text-[#B0B0B0] mb-2 text-sm">Status</label>
          <div className="relative">
            <select
              value={filter.status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
              className="w-full bg-[#1E1E2F] border border-gray-700 rounded-lg py-2 px-3 text-white appearance-none focus:outline-none focus:border-[#FF6B6B]"
            >
              <option value="">All Status</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        <div>
          <label className="block text-[#B0B0B0] mb-2 text-sm">Type</label>
          <div className="relative">
            <select
              value={filter.type}
              onChange={(e) => setFilter({ ...filter, type: e.target.value })}
              className="w-full bg-[#1E1E2F] border border-gray-700 rounded-lg py-2 px-3 text-white appearance-none focus:outline-none focus:border-[#FF6B6B]"
            >
              <option value="">All Types</option>
              <option value="Manga">Manga</option>
              <option value="Manhwa">Manhwa</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        <div>
          <label className="block text-[#B0B0B0] mb-2 text-sm">Sort By</label>
          <div className="relative">
            <select
              value={filter.sort}
              onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
              className="w-full bg-[#1E1E2F] border border-gray-700 rounded-lg py-2 px-3 text-white appearance-none focus:outline-none focus:border-[#FF6B6B]"
            >
              <option value="latest">Latest Update</option>
              <option value="rating">Highest Rating</option>
              <option value="popularity">Most Popular</option>
              <option value="newest">Newest Added</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};