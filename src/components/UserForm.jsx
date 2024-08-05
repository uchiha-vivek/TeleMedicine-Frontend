import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    Age: '',
    Gender: '',
    CGPA: '',
    Sleep_Quality: '',
    Physical_Activity: '',
    Diet_Quality: '',
    Extracurricular_Involvement: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setPrediction(response.data.Stress_Level);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">User Information Form</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Age">Age</label>
          <input 
            type="number" 
            name="Age" 
            value={formData.Age} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Gender">Gender</label>
          <select 
            name="Gender" 
            value={formData.Gender} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CGPA">CGPA</label>
          <input 
            type="number" 
            step="0.01"
            name="CGPA" 
            value={formData.CGPA} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Sleep_Quality">Sleep Quality</label>
          <input 
            type="text" 
            name="Sleep_Quality" 
            value={formData.Sleep_Quality} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Physical_Activity">Physical Activity</label>
          <input 
            type="text" 
            name="Physical_Activity" 
            value={formData.Physical_Activity} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Diet_Quality">Diet Quality</label>
          <input 
            type="text" 
            name="Diet_Quality" 
            value={formData.Diet_Quality} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Extracurricular_Involvement">Extracurricular Involvement</label>
          <input 
            type="text" 
            name="Extracurricular_Involvement" 
            value={formData.Extracurricular_Involvement} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
          />
        </div>

        <div className="flex items-center justify-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Submit
          </button>
        </div>
      </form>
      
      {prediction !== null && (
        <div className="mt-8 p-6 bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 shadow-md">
          <div className="flex">
            <div className="py-1">
              <svg className="w-6 h-6 text-blue-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20l5.588-5.588H11.25v-4.75h-2.5v4.75H4.412L10 20zM10 2c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm1 4v5h-2V6h2zm0 6v5h-2v-5h2z"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-xl">Stress Level Prediction</h3>
              <p className="text-lg">{prediction}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
