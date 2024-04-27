'use client'
import React, { useState } from 'react';
import axios from 'axios';

const PopupForm = ({MainprojectName}) => {
    console.log(MainprojectName)
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    taskName: '',
    projectName: MainprojectName,
    taskDescription: '',
    taskNeededworkers: '',
    priority: 'low',
    longitude: '',
    latitude: '',
    tagtasks: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagTasksChange = (e) => {
    const selectedTags = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, tagtasks: selectedTags });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDY2NjYiLCJpYXQiOjE3MTQyMDE0MTUsImV4cCI6MTcxNDM3NDIxNX0.PRuYiToPT38pODNfs59dGy9FVnB_XjMxUnCHXKBZX-0';
      
      const response = await axios.post('http://192.168.190.76:3000/api/task/createtask', formData, {
        headers: {
          authorization: `${token}`
        }
      });

      console.log('Task created:', response.data);
      setFormData({
        taskName: '',
        projectName: MainprojectName,
        taskDescription: '',
        taskNeededworkers: '',
        priority: 'low',
        longitude: '',
        latitude: '',
        tagtasks: []
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div>
      <button className="bg-primary  text-white font-bold py-2 px-4 rounded" onClick={() => setIsOpen(true)}>Add Task</button>
      {isOpen && (
        <div className="fixed pt-5 z-10 inset-0 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex justify-end">
              <button className="text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
                  Task Name:
                </label>
                <input
                  type="text"
                  id="taskName"
                  name="taskName"
                  value={formData.taskName}
                  onChange={handleInputChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskDescription">
                  Task Description:
                </label>
                <textarea
                  id="taskDescription"
                  name="taskDescription"
                  value={formData.taskDescription}
                  onChange={handleInputChange}
                  className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskNeededworkers">
                  Task Needed Workers:
                </label>
                <input
                  type="text"
                  id="taskNeededworkers"
                  name="taskNeededworkers"
                  value={formData.taskNeededworkers}
                  onChange={handleInputChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
             
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                  Priority:
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">
                  Longitude:
                </label>
                <input
                  type="text"
                  id="longitude"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleInputChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
                  Latitude:
                </label>
                <input
                  type="text"
                  id="latitude"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleInputChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              
              <button type="submit" className="bg-primary  text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
