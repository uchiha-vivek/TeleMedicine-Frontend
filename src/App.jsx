
import React from "react"
import { Route,Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./Pages/Home"
import LandingPage from "./Pages/LandingPage"

function App(){

  return (
    <>
       <div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
       </div>
    </>
  )
}
export default App