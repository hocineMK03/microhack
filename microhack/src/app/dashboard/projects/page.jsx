"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/sidebar/sidebar';
import Create from "@/components/createProject/CreateProject"

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.190.76:3000/api/project/displayprojects');
        setProjects(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-start min-w-full min-h-screen bg-[#FAFAFA]">
      <Sidebar />
      <div className='w-full p-10 h-full'>
        <div className="flex justify-between">
        <h2 className="text-3xl  font-semibold">All Projects</h2>
        <Create/>
        </div>
        <table className="w-full h-full mt-4 text-center">
          <thead className="w-full">
            <tr className='w-full '>
              <th>Project Name</th>
              <th>Tasks</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody className="w-full pointer">
            {projects.map((project, index) => (
              <tr
                className="h-[50px] pointer"
                key={index}
                onClick={() => {
                  window.location.href = `/dashboard/projects/${project._id}`;
                }}
                style={{ marginBottom: '10px' }}
              >
                <td className='pointer'>{project.projectName}</td>
                <td>{project.tasksObjects.length}</td>
                <td><p  className={
                project.projectStatus === "completed"
                  ? "py-1 bg-[#84fbc2] text-[#0CAF60] rounded-[10px] "
                  : project.projectStatus === "pending"
                  ? "py-1 bg-[#f08282] text-[#af0c0c] rounded-[10px]"
                  : project.projectStatus === "on progress"
                  ? "py-1  bg-[#f0a982] text-[#af420c] rounded-[10px]"
                  : ""
              }>{project.projectStatus}</p></td>
                <td>
                  <p
                    className={
                      project.projectpriority === 'high'
                        ? 'py-1 bg-[#F08282] w-[80%] rounded-[10px]'
                        : project.projectpriority === 'medium'
                        ? 'py-1 bg-[#82bdf0] w-[80%] rounded-[10px]'
                        : project.projectpriority === 'low'
                        ? 'py-1 bg-[#f0bb82] w-[80%] rounded-[10px]'
                        : ''
                    }
                  >
                    {project.projectpriority}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
