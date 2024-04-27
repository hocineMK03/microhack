"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/sidebar/sidebar';

const users = () => {



  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDY2NjYiLCJpYXQiOjE3MTQyMDE0MTUsImV4cCI6MTcxNDM3NDIxNX0.PRuYiToPT38pODNfs59dGy9FVnB_XjMxUnCHXKBZX-0'

        const response = await axios.get('http://192.168.190.76:3000/api/auth/displayusers', {
          headers: {
            'Content-Type': 'application/json',
            authorization: `${token}`

          },
          credentials : 'include'
        });

        setUsers(response.data);
        console.log(response.data);
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
        <h2 className="text-3xl  font-semibold">Users</h2>
        <table className="w-full h-full mt-4 text-center">
          <thead className="w-full">
            <tr className='w-full '>
              <th>Name</th>
              <th>Role</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody className="w-full pointer">
            {users.map((users, index) => (
              <tr
                className="h-[50px]"
                key={index}
              
                style={{ marginBottom: '10px' }}
              >
                <td>{users.username}</td>
                <td>{users.role}</td>
                <td>
                  
                    {users.phoneNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default users;
