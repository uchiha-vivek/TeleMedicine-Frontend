// src/components/Card.jsx
import React, { useState } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ name, info, linkedin, twitter }) => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    toast.success('Query submitted successfully!', {
      position: 'top-center',
    });
    setIsInputOpen(false);
    setQuery('');
  };

  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-6 m-4 flex-shrink-0">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm text-center mt-2">{info}</p>
        <div className="mt-4 flex space-x-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin size={24} />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={24} />
          </a>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={() => setIsInputOpen(!isInputOpen)}
        >
          Ask a Question
        </button>
        {isInputOpen && (
          <form onSubmit={handleQuerySubmit} className="mt-4 w-full">
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your question"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Card;
