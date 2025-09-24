import React from 'react'
import A from "../assets/a.png"

const Top = () => {
    const details=[
        {
            img:A,
            name:"Mohit Budha Magar",
            description:"I am Mohit, an engineering student with a passion for technology, coding, and problem-solving",
            button:"Learn More.."
        },
        {
            img:A,
            name:"Mohit Budha Magar",
            description:"I am Mohit, an engineering student with a passion for technology, coding, and problem-solving",
            button:"Learn More.."
        },
        {
            img:A,
            name:"Mohit Budha Magar",
            description:"I am Mohit, an engineering student with a passion for technology, coding, and problem-solving",
            button:"Learn More.."
        },
        
        {
            img:A,
            name:"Mohit Budha Magar",
            description:"I am Mohit, an engineering student with a passion for technology, coding, and problem-solving",
            button:"Learn More.."
        },
        {
            img:A,
            name:"Mohit Budha Magar",
            description:"I am Mohit, an engineering student with a passion for technology, coding, and problem-solving",
            button:"Learn More.."
        },
        {
            img:A,
            name:"Mohit Budha Magar",
            description:"I am Mohit, an engineering student with a passion for technology, coding, and problem-solving",
            button:"Learn More.."
        },
    ]
  return (
    <>
      <div className='text-4xl text-red-800 mx-auto font-bold text-center'>Cards</div>
       <div className='flex gap-6 justify-center mt-8'>
      {details.map((val,i)=>{
        return(
       <div className='border-2 rounded-2xl w-55 h-70'>
        <div><img src={val.img} alt="" className='h-18 mx-auto w-15 rounded-full mt-1' /></div>
        <div className='text-xl font-bold text-center mt-2'>{val.name}</div>
        <div className='text-center mt-2'>{val.description}</div>
        <div className='text-center mt-4'><button className='border-2 font-bold rounded-2xl px-2 hover:bg-blue-400'>{val.button}</button></div>
      </div>
      
        )
      })}
    </div>
    </>
  )
}

export default Top
