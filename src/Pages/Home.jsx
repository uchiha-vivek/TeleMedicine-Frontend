import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardContainer from "../components/CardContainer";
import { ToastContainer } from "react-toastify";
import Accordion from "../components/Accordion";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'; // Ensure CSS is imported
import TestCard from "../components/TestCard";

const accordionItems = [
  { title: "What is mental stress?", content: "Mental stress refers to the feeling of being overwhelmed, anxious, or unable to cope due to mental or emotional pressure." },
  { title: "How to manage stress?", content: "Managing stress can involve various techniques such as practicing mindfulness, exercising, getting enough sleep, and talking to a therapist." },
  { title: "Resources for students", content: "Students can seek help through university counseling services, support groups, and online resources dedicated to mental health." }
];

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-8 mt-5">Meet Our Team</h1>
        <CardContainer />
        <div className="mt-8 w-full max-w-lg flex justify-center">
          {/* <Accordion items={accordionItems} /> */}
          <Link to='/blog'>
            <button className="px-4 py-2 text-white bg-black rounded">
              Centered Button
            </button>
          </Link>
          
        </div>
        <TestCard/>
      </main>
      <Footer />
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default Home;
