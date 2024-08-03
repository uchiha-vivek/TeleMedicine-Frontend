// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardContainer from "../components/CardContainer";
import { ToastContainer } from "react-toastify";
import Accordion from "../components/Accordion";
import 'react-toastify/dist/ReactToastify.css'; // Ensure CSS is imported

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
        <h1 className="text-3xl font-bold mb-8">Meet Our Team</h1>
        <CardContainer />
        <div className="mt-8 w-full max-w-lg">
          {/* <Accordion items={accordionItems} /> */}
        </div>
      </main>
      <Footer />
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default Home;
