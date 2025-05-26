import React from 'react';
import { BookOpen } from 'lucide-react';
import { SeriesCard } from '../components/SeriesCard';
import { seriesData } from '../data/seriesData';

export const Home: React.FC = () => {
  const popularSeries = [...seriesData]
    .sort((a, b) => b.views - a.views)
    .slice(0, 6);

  return (
    <div className="flex gap-6">
      {/* Popular Series Sidebar */}
      <div className="hidden lg:block w-64 bg-[#2A2A3B] p-4 rounded-lg h-fit">
        <h2 className="text-xl font-semibold text-white mb-4">Popüler Seriler</h2>
        <div className="space-y-4">
          {popularSeries.map((series) => (
            <div key={series.id} className="flex gap-3 cursor-pointer hover:bg-[#1E1E2F] p-2 rounded-lg transition-colors">
              <img 
                src={series.coverImage} 
                alt={series.title}
                className="w-16 h-20 object-cover rounded"
              />
              <div>
                <h3 className="text-white font-medium mb-1">{series.title}</h3>
                <p className="text-[#B0B0B0] text-sm line-clamp-2">{series.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-10">
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
                Manga ve Manhwa Dünyasına Hoş Geldiniz
              </h1>
              <p className="text-[#B0B0B0] mb-6 text-sm sm:text-base">
                Binlerce manga ve manhwa serisini keşfedin.
                Favori serilerinizi dilediğiniz zaman okuyun.
              </p>
              <button className="bg-[#FF6B6B] hover:bg-[#FF8989] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Tüm Serilere Göz At
              </button>
            </div>
          </div>
        </section>
        
        {/* Popular Series Section */}
        <section>
          <div className="flex items-center mb-6">
            <BookOpen className="text-[#FF6B6B] mr-2" size={24} />
            <h2 className="text-2xl font-bold text-white">Popüler Seriler</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {popularSeries.map((series) => (
              <SeriesCard key={series.id} series={series} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};