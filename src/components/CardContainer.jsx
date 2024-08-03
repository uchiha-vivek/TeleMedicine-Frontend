// src/components/CardContainer.jsx
import React, { useRef } from 'react';
import Card from './Card';

const CardContainer = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const cardsData = [
    { name: 'John Doe', info: 'Software Engineer at XYZ', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
    { name: 'Jane Smith', info: 'Product Manager at ABC', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
    // Add more cards as needed
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
        &lt;
      </button>
      <div ref={containerRef} className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
        &gt;
      </button>
    </div>
  );
};

export default CardContainer;
