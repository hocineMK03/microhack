
"use client"
import Link from "next/link";
import Sidebar from "@/components/sidebar/sidebar";
import Create from "@/components/createTask/CreateTask"
import axios from "axios";
import { useState, useEffect } from "react";
const Project = ({ params}) => {
    const { slug } = params;
    const [project, setProject] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDY2NjYiLCJpYXQiOjE3MTQyMDE0MTUsImV4cCI6MTcxNDM3NDIxNX0.PRuYiToPT38pODNfs59dGy9FVnB_XjMxUnCHXKBZX-0'
  
          const response = await axios.get(`http://192.168.190.76:3000/api/project/getprojectbyid?projectID=${slug}`, {
            headers: {
              'Content-Type': 'application/json',
              authorization: `${token}`
              
            },
            credentials : 'include'
          });
          
  
          setProject(response.data);
          console.log(response.data);


          


        } catch (error) {
          console.error('Error:', error);
        }
      };
      fetchData();

      const fetchTasks = async () => {
        try {
          const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDY2NjYiLCJpYXQiOjE3MTQyMDE0MTUsImV4cCI6MTcxNDM3NDIxNX0.PRuYiToPT38pODNfs59dGy9FVnB_XjMxUnCHXKBZX-0'
  
       
          const Taskresponse = await axios.post(`http://192.168.190.76:3000/api/task/displaytasks`, {projectName: projectName}, {
            headers: {
              'Content-Type': 'application/json',
              authorization: `${token}`
              
            },
            credentials : 'include'
          });
  
          setTasks(Taskresponse.data);
          console.log(Taskresponse.data);

        } catch (error) {
          console.error('Error:', error);
        }
      };
      fetchTasks();

     
 
      

    }, []);
  return (
    <div className="flex justify-start min-w-full  min-h-screen bg-[#FAFAFA]">

      <Sidebar/>
       <div className="w-full p-10 h-full">
        <div className="flex justify-between">
       <h1 className="text-3xl font-bold">{project.projectName}</h1>
          <Create MainprojectName={project.projectName}/>
        </div>
        <p className="text-sm text-[#ccc]">Created {project.dateCreated? project.dateCreated.substring(0,10) : ""}</p>
        <p className="mt-9">{project.projectDescription}</p>

        <h2 className="text-2xl font-bold mt-4">Tasks <span className="text-[#ccc]">({project.tasksObjects? project.tasksObjects.length : "" })</span></h2>

        </div>


    </div>
  );
};

export default Project;