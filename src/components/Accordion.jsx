// src/components/Accordion.jsx
import React, { useState } from 'react';

const Accordion = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      {items.length === 0 ? (
        <p className="p-4">No items to display</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left p-4 focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{item.title}</span>
                <span>
                  {activeIndex === index ? (
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-100">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Accordion;
