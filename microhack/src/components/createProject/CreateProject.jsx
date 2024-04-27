"use client"

import React, { useState } from 'react';
import axios from 'axios';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectPriority: 'low'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDY2NjYiLCJpYXQiOjE3MTQyMDE0MTUsImV4cCI6MTcxNDM3NDIxNX0.PRuYiToPT38pODNfs59dGy9FVnB_XjMxUnCHXKBZX-0';
      
      const response = await axios.post('http://192.168.190.76:3000/api/project/createproject', formData, {
        headers: {
          authorization: `${token}`
        }
      });

      console.log('Project created:', response.data);
      setFormData({
        projectName: '',
        projectDescription: '',
        projectPriority: 'low'
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div>
      <button className="bg-primary  text-white font-bold py-2 px-4 rounded" onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex justify-end">
              <button className="text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">Add New Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                  Project Name:
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                  Priority:
                </label>
                <select
                  id="priority"
                  name="projectPriority"
                  value={formData.projectPriority}
                  onChange={handleInputChange}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
