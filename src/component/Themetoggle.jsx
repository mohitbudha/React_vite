import React, { useState } from "react";

const Themetoggle=()=>{
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`min-h-screen flex items-center justify-center  duration-1000 
      ${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Dark/Light Toggle</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-md border hover:shadow"
        >
          {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Themetoggle