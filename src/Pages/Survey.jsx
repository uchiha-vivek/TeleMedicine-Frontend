import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import React from "react"
import Question from "../components/Question"


function Survey(){

    return (
        <>
        <div className="flex flex-col min-h-screen" >
            <Navbar/>
          <main className="flex-grow bg-gray-100 p-8" >
                <Question/>
          </main>
          <Footer/>
        </div>
        </>
    )
}
export default Survey