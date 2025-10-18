import React, { useRef, useState } from 'react'

const TimerApp = () => {
    const [seconds, setSeconds]= useState(0);
       const [isactive, setIsactive]= useState(false);
    const TimerRef = useRef(null);
    const startTimer =()=>{
        if(TimerRef.current !==null) return;
        TimerRef.current=setInterval(()=>{
            setSeconds((prev)=> prev+1);
        },1000);
        setIsactive(true);
        setTimeout(()=>setIsactive(flse),1000);
    };
    const stopTimer =()=>{
        clearInterval(TimerRef.current);
        TimerRef.current=null;
        setIsactive(true);
        setTimeout(()=>setIsactive(flse),1000);
    };
    const resetTimer=()=>{
        stopTimer();
        setSeconds(0);
        setIsactive(true);
        setTimeout(()=>setIsactive(flse),1000);
    };
 
   
  return (
    
    <div className='text-center items-center justify-center'>
      <h1 className=' font-semibold text-2xl'>Timer : {seconds} s</h1>
      <div className='space-x-2'>
        <button className={`bg-green-400 p-4 text-white rounded-sm ${isactive ? "bg-green-600 scale-105" : "bg-blue-500 hover:bg-blue-600"}  `}onClick={startTimer}>Start</button>
        <button className={`bg-red-400 p-4 text-white rounded-sm ${isactive ? "bg-red-600 scale-105" : "bg-blue-500 hover:bg-blue-600"}  `}onClick={stopTimer}>Stop</button>
        <button className={`bg-blue-400 p-4 text-white rounded-sm ${isactive ? "bg-blue-600 scale-105" : "bg-blue-500 hover:bg-blue-600"} `} onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default TimerApp
