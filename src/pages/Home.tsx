import React from 'react';
import { BookOpen } from 'lucide-react';
import { SeriesCard } from '../components/SeriesCard';
import { seriesData } from '../data/seriesData';

export const Home: React.FC = () => {
  // Get latest updated series
  const latestSeries = [...seriesData].sort((a, b) => 
    new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime()
  ).slice(0, 6);
  
  // Get popular series
  const popularSeries = [...seriesData].sort((a, b) => 
    b.views - a.views
  ).slice(0, 6);

  return (
    <div className="space-y-10">
      {/* Hero section */}
      <section className="relative rounded-xl overflow-hidden h-64 sm:h-80 md:h-96">
        <img 
          src="https://images.pexels.com/photos/5486845/pexels-photo-5486845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E2F]/90 to-[#1E1E2F]/30 flex items-center">
          <div className="px-6 sm:px-10 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Your Gateway to Manga & Manhwa
            </h1>
            <p className="text-[#B0B0B0] mb-6 text-sm sm:text-base">
              Discover thousands of manga and manhwa series updated daily.
              Read your favorites anytime, anywhere.
            </p>
            <button className="bg-[#FF6B6B] hover:bg-[#FF8989] text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Browse All Series
            </button>
          </div>
        </div>
      </section>
      
      {/* Latest Updates Section */}
      <section>
        <div className="flex items-center mb-6">
          <BookOpen className="text-[#FF6B6B] mr-2" size={24} />
          <h2 className="text-2xl font-bold text-white">Latest Updates</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {latestSeries.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
      </section>
      
      {/* Popular Series Section */}
      <section>
        <div className="flex items-center mb-6">
          <BookOpen className="text-[#FF6B6B] mr-2" size={24} />
          <h2 className="text-2xl font-bold text-white">Popular Series</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {popularSeries.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
      </section>
    </div>
  );
};