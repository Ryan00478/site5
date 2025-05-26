import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Disclaimer</h1>
        <p className="text-[#B0B0B0]">
          Important information about our content and services.
        </p>
      </div>
      
      <div className="bg-[#2A2A3B] rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-[#1E1E2F] p-4 rounded-full">
              <AlertTriangle size={32} className="text-[#FF6B6B]" />
            </div>
          </div>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Copyright Notice</h2>
              <p className="text-[#B0B0B0]">
                All manga, manhwa, and related content available on MangaReader belong to their respective owners and creators. We do not claim ownership of any content displayed on this website. The content is provided for personal, non-commercial use only.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">DMCA Compliance</h2>
              <p className="text-[#B0B0B0]">
                MangaReader respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (DMCA). If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us with the necessary information.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Content Accuracy</h2>
              <div className="flex items-start">
                <Shield className="text-[#FFD93D] mr-3 mt-1" size={20} />
                <p className="text-[#B0B0B0]">
                  While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the content on our website.
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">External Links</h2>
              <p className="text-[#B0B0B0]">
                Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Age Restrictions</h2>
              <div className="flex items-start">
                <Shield className="text-[#FFD93D] mr-3 mt-1" size={20} />
                <p className="text-[#B0B0B0]">
                  Some content on this website may not be suitable for all ages. Users are responsible for ensuring that the content they access is appropriate according to their local laws and regulations.
                </p>
              </div>
            </section>
            
            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
              <p className="text-[#B0B0B0]">
                By using MangaReader, you acknowledge that you have read, understood, and agree to this disclaimer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};