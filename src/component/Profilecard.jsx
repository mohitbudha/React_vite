// Using object method

import React from 'react'
import A from '../assets/a.png'

const Profilecard = () => {
    const details=[
        {
            img:A,
            Name:"Mohit Budha",
            RollNo:"10"
        }
    ]
  return (
    <div>
      {details.map((val)=>{
        return(
        <div className='w-55 h-60 rounded-xl shadow-2xl'>
      <img src={val.img} alt=""  className='h-20 w-15 rounded-full mx-auto mt-4'/>
      <h3 className='text-center mt-4 font-bold text-xl'>{val.Name}</h3>
      <h4 className='text-center text-gray-500 mt-3'>RollNo: {val.RollNo}</h4>
      <div className='text-center mt-3'>
      <button className=' rounded-xl bg-blue-800 px-6 py-2 font-bold  text-white hover:bg-blue-900'>View Details</button>
      </div>
    </div>
      )})}
    </div>
  )
}

export default Profilecard

