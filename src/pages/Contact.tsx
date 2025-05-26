import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-[#B0B0B0]">
          Have questions, suggestions, or feedback? We'd love to hear from you!
        </p>
      </div>
      
      <div className="bg-[#2A2A3B] rounded-lg overflow-hidden shadow-lg">
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <MessageSquare className="text-[#FF6B6B] mr-2" size={20} />
                Get in Touch
              </h2>
              
              <p className="text-[#B0B0B0] mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Mail className="text-[#FF6B6B] mr-3 mt-1" size={18} />
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-[#B0B0B0]">support@mangareader.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[#B0B0B0] mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#1E1E2F] border border-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#FF6B6B]"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#B0B0B0] mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#1E1E2F] border border-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#FF6B6B]"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[#B0B0B0] mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-[#1E1E2F] border border-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#FF6B6B]"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#B0B0B0] mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-[#1E1E2F] border border-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-[#FF6B6B]"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-[#FF6B6B] hover:bg-[#FF8989] text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};