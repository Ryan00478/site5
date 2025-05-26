import React, { useState, useEffect } from 'react';
import { FilterBar } from '../components/FilterBar';
import { SeriesCard } from '../components/SeriesCard';
import { Pagination } from '../components/Pagination';
import { seriesData } from '../data/seriesData';

export const Series: React.FC = () => {
  // Filter state
  const [filter, setFilter] = useState({
    genre: '',
    status: '',
    type: '',
    sort: 'latest'
  });
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  // Filtered and sorted series
  const [filteredSeries, setFilteredSeries] = useState(seriesData);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...seriesData];
    
    // Apply genre filter
    if (filter.genre) {
      result = result.filter(series => 
        series.genres.includes(filter.genre)
      );
    }
    
    // Apply status filter
    if (filter.status) {
      result = result.filter(series => 
        series.status === filter.status
      );
    }
    
    // Apply type filter
    if (filter.type) {
      result = result.filter(series => 
        series.type === filter.type
      );
    }
    
    // Apply sorting
    switch (filter.sort) {
      case 'latest':
        result.sort((a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime());
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
        result.sort((a, b) => b.views - a.views);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime());
        break;
      default:
        break;
    }
    
    setFilteredSeries(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filter]);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredSeries.length / itemsPerPage);
  const currentItems = filteredSeries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Browse Series</h1>
        <p className="text-[#B0B0B0]">
          Discover and filter through our extensive collection of manga and manhwa series.
        </p>
      </div>
      
      <FilterBar filter={filter} setFilter={setFilter} />
      
      {currentItems.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map((series) => (
              <SeriesCard key={series.id} series={series} />
            ))}
          </div>
          
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div className="bg-[#2A2A3B] rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">No series found</h3>
          <p className="text-[#B0B0B0]">
            No series match your current filter criteria. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  );
};