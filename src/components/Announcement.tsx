import React, { useEffect, useRef } from 'react';

export const Announcement: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstElementChild as HTMLElement;
    if (!scrollContent) return;

    const clone = scrollContent.cloneNode(true);
    scrollContainer.appendChild(clone);

    let scrollPosition = 0;
    const speed = 1;

    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += speed;
      
      if (scrollPosition >= scrollContent.offsetWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <div className="w-full bg-[#2A2A3B] border-y border-gray-700 py-2 mt-0.5">
      <div 
        ref={scrollRef}
        className="overflow-hidden whitespace-nowrap"
      >
        <div className="inline-block">
          <span className="mx-4 text-[#FF6B6B] font-medium">YENİ!</span>
          <span className="text-white">One Piece 1095. Bölüm yayında!</span>
          <span className="mx-6">|</span>
          <span className="text-white">Hunter x Hunter 399. Bölüm ile geri döndü!</span>
          <span className="mx-6">|</span>
          <span className="text-white">Jujutsu Kaisen manga final arkına girdi!</span>
          <span className="mx-6">|</span>
        </div>
      </div>
    </div>
  );
};