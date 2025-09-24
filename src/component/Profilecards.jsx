import React from 'react'

const Profilecards = ({Name,RolNo,Image}) => {
    
  return (
    <div className=''>
     <div className='w-55 h-60 rounded-xl shadow-2xl'>
      <img src={Image} alt=""  className='h-20 w-15 rounded-full mx-auto mt-4'/>
      <h3 className='text-center mt-4 font-bold text-xl'>{Name}</h3>
      <h4 className='text-center text-gray-500 mt-3'>RollNo: {RolNo}</h4>
      <div className='text-center mt-3'>
      <button className=' rounded-xl bg-blue-800 px-6 py-2 font-bold  text-white hover:bg-blue-900'>View Details</button>
      </div>
    </div>

    
    </div>
  )
}

export default Profilecards
