import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Subscribed successfully!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-black text-white py-4 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-l hover:bg-blue-700"
            >
              Subscribe
            </button>
            <input
              id="email"
              type="email"
              className="p-2 text-black rounded-r"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
