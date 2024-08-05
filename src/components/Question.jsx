import React from "react";
import { ToastContainer,toast } from "react-toastify";
const  questions = [
    "How often do you feel overwhelmed by your daily responsibilities?",
    "How would you rate your overall mental health on a scale from 1 to 10(10 being best) "
]




function Question(){

function handleSubmit(e){
    e.preventDefault()
    toast.success('Form Submitted successfully !')
}

    return(
        <>
        <div className="container mx-auto p-6">
            <ToastContainer/>
               <h1 className="text-3xl font-bold mb-6">Mental Health and Depression Questionare</h1>
               <form className="space-y-4" onSubmit={handleSubmit} >
                {
                    questions.map((question,index) => (
                        <div key={index} className="flex flex-col" >
                              <label className="mb-2 font-medium text-gray-700">{question}</label>
                              <textarea className="border  border-gray-300 rounded p-2" rows="3"></textarea>
                        </div>
                    )  )
                }
                <button type="submit" className="mt-6 bg-black font-bold text-white py-2 px-4 rounded hover:bg-blue-700" >Submit</button>
               </form>
        </div>
        </>
    )
}
export default Question