import React from "react";
import { Link } from "react-router-dom";


function LandingPage() {

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="mb-8 text-2xl font-bold text-center fade-in">
                    Unwind your mind: because college stress deserves a healthy outlet.
                </h1>
                <Link to='/home'>
                <button className="px-4 py-2 text-white bg-black rounded">
                    Explore More !
                </button>
                </Link>
                
                <Link to='/survey' >
                <button className="bg-black rounded mt-64 text-white px-4 py-2">
                    Join the Survey !
                </button>
                </Link>
                
                 
            </div>
        </>
    )
}
export default LandingPage