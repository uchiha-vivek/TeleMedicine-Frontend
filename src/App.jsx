
import React from "react"
import { Route,Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./Pages/Home"
import LandingPage from "./Pages/LandingPage"
import BlogPage from "./Pages/BlogPage"
import FormPage from "./Pages/FormPage"
import Survey from "./Pages/Survey"
import FAQ from "./Pages/FAQ"

function App(){

  return (
    <>
       <div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/test-form" element={<FormPage/>}/>
          <Route path="/survey" element={<Survey/>}/>
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
       </div>
    </>
  )
}
export default App