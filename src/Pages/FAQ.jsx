import Accordion from "../components/Accordion"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import React from "react"

const accordionItems = [
    {
      title: 'What is mental health?',
      content: 'Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.',
    },
    {
      title: 'How to manage stress?',
      content: 'Stress management includes techniques like deep breathing, meditation, regular physical activity, maintaining a positive attitude, managing your time effectively, and seeking support from friends, family, or a professional.',
    },
    {
      title: 'What are common mental health issues?',
      content: 'Common mental health issues include anxiety disorders, depression, bipolar disorder, eating disorders, personality disorders, and post-traumatic stress disorder (PTSD).',
    },
    {
      title: 'Why is sleep important for mental health?',
      content: 'Sleep is crucial for mental health because it allows the brain to rest and repair. Poor sleep can contribute to the development of mental health issues like depression and anxiety, and can also make it harder to cope with stress.',
    },
    {
      title: 'What are some techniques for improving mental health?',
      content: 'Techniques for improving mental health include regular exercise, eating a balanced diet, getting enough sleep, practicing mindfulness and meditation, connecting with others, and seeking professional help when needed.',
    },
    {
      title: 'How can mindfulness help with stress management?',
      content: 'Mindfulness can help with stress management by promoting a state of active, open attention to the present. This helps to reduce the tendency to get caught up in negative thoughts and stressors, leading to a more relaxed state of mind.',
    },
  ];
  

function FAQ(){

    return (
        <>
        <div className="flex flex-col min-h-screen" >
            <Navbar/>
          <main className="flex-grow bg-gray-100 p-8" >
             <h1 className="text-4xl font-bold text-center mb-8">FAQ's</h1>
             <Accordion items={accordionItems} />
          </main>
          <Footer/>
        </div>
        </>
    )
}
export default FAQ