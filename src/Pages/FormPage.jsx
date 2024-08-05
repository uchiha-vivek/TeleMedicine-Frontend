import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserForm from '../components/UserForm';

 

const FormPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 p-8">
         <UserForm/>
      </main>
      <Footer />
    </div>
  );
};

export default FormPage;
