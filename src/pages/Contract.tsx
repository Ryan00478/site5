import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

export const Contract: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-[#B0B0B0]">
          Please read these terms and conditions carefully before using our service.
        </p>
      </div>
      
      <div className="bg-[#2A2A3B] rounded-lg shadow-lg p-6 md:p-8">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
              <FileText className="text-[#FF6B6B] mr-2" size={20} />
              Agreement to Terms
            </h2>
            <p className="text-[#B0B0B0]">
              By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
              <FileText className="text-[#FF6B6B] mr-2" size={20} />
              Content Guidelines
            </h2>
            <p className="text-[#B0B0B0] mb-3">
              All content published on MangaReader follows these guidelines:
            </p>
            <ul className="space-y-2">
              {[
                "Content is provided for personal, non-commercial use only",
                "Proper attribution is given to original creators and publishers",
                "Content that violates copyright laws will be removed",
                "User-submitted content must adhere to community guidelines"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-[#FFD93D] mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-[#B0B0B0]">{item}</span>
                </li>
              ))}
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
              <FileText className="text-[#FF6B6B] mr-2" size={20} />
              User Accounts
            </h2>
            <p className="text-[#B0B0B0]">
              When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding the password and for all activities that occur under your account. You agree not to disclose your password to any third party.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
              <FileText className="text-[#FF6B6B] mr-2" size={20} />
              Termination
            </h2>
            <p className="text-[#B0B0B0]">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
              <FileText className="text-[#FF6B6B] mr-2" size={20} />
              Changes to Terms
            </h2>
            <p className="text-[#B0B0B0]">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};