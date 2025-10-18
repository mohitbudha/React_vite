import React,{useEffect, useState} from 'react'

const useEffectExample = () => {
    const [count, setCount]= useState(0);
 useEffect (()=>{
    console.log(count);
 },[count])
  return (
    <div>
      <h3>Count : {count}</h3>
      <button className='text-black' onClick={()=>setCount(count+1)}>increase</button>
    </div>
  )
}

export default useEffectExample
