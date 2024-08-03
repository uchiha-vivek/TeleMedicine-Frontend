// src/components/QuestionnaireForm.jsx
import React, { useState } from 'react';

const QuestionnaireForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    stressLevel: '',
    stressCauses: '',
    copingStrategies: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Mental Stress and Distress Questionnaire</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="stressLevel" className="text-lg font-semibold mb-2">How would you rate your current stress level?</label>
          <select
            id="stressLevel"
            name="stressLevel"
            value={formData.stressLevel}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Very High">Very High</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="stressCauses" className="text-lg font-semibold mb-2">What are the main causes of your stress?</label>
          <textarea
            id="stressCauses"
            name="stressCauses"
            value={formData.stressCauses}
            onChange={handleChange}
            rows="4"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="copingStrategies" className="text-lg font-semibold mb-2">What strategies do you use to cope with stress?</label>
          <textarea
            id="copingStrategies"
            name="copingStrategies"
            value={formData.copingStrategies}
            onChange={handleChange}
            rows="4"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="additionalComments" className="text-lg font-semibold mb-2">Additional comments or suggestions</label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            rows="4"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionnaireForm;
