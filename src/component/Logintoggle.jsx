import React, { useState } from "react";

const Logintoggle = () => {
  const [logedIn, setlogedIn] = useState(false);
  const [count, setCount]= useState(0);
  const [dark,setdark]= useState(false);

  return (
    <div className={`min-h-screen ${dark ? "text-black bg-white" : "bg-black text-white"}`}>
    <div
      style={{
        textAlign: "center",
        paddingTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 className="font-bold">
        {logedIn ? "Welcome Back " : "Please Login "}
      </h1>
      <button
        onClick={() => setlogedIn(!logedIn)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: logedIn ? "#ff4d4d" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {logedIn ? "Log Out" : "Login"}
      </button>

    <div className="my-5">
        <h1 className="font-bold mb-3">Counter : {count}</h1>
        <button
        className="bg-green-600 text-2xl text-white px-4 rounded-xl"
        onClick={()=>{
            setCount(count+1);
        }}
        >+</button>
        <button 
        className="bg-red-600 text-2xl text-white px-4 rounded-xl"
        onClick={()=>{
            setCount(count-1);
        }}>-</button>
    </div>
    </div>
    <div className="justify-center items-center flex">
        <button onClick={()=>{
            setdark(!dark);
            }}
            className="font-bold border-1 rounded-sm p-2"
            >{dark ? "switch to dark mode" : "switch to light mode"}</button>
    </div>
    </div>
  );
};

export default Logintoggle;
