import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const Users = () => {
    const[user,setUser]=useState([]);
     const Featch= async ()=>{
        const res= await axios.get('https://fakestoreapi.com/users');
        setUser(res.data);
        console.log(res.data,'Users Data');
     }

     useEffect(()=>{
        Featch();
     },[]);
  return (
   <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">User Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Full Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">Street</th>
              <th className="border px-4 py-2">Zipcode</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 text-center">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2 capitalize">
                  {user.name.firstname} {user.name.lastname}
                </td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2 capitalize">
                  {user.address.city}
                </td>
                <td className="border px-4 py-2 capitalize">
                  {user.address.street} {user.address.number}
                </td>
                <td className="border px-4 py-2">{user.address.zipcode}</td>
                <td className='flex gap-2 text-2xl px-2 py-2 border-b'>
                    <button className=' text-blue-500 hover:text-blue-600'><MdOutlineEdit /></button>
                    <button className='text-red-500 hover:text-red-600'><MdOutlineDelete /></button>
                    
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users
