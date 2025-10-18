import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {theme,toggleTheme}= useContext (ThemeContext);
  const [open,setOpen]= useState(false);
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1
          className="text-xl font-semibold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Student Manager
        </h1>
        <div className="space-x-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full text-sm font-medium ${
                isActive ? "bg-blue-800 font-bold" : "hover:bg-blue-700"
              }`
            }
          >
            Home
          </NavLink> 
          <NavLink
            to="/list"
            className={({ isActive }) =>
              `px-4 py-2 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full text-sm font-medium ${
                isActive ? "bg-blue-800 font-bold" : "hover:bg-blue-700"
              }`
            }
          >
            Student List
          </NavLink>
          <NavLink
            onClick={()=> setOpen(!open)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full text-sm font-medium ${
                isActive ? "bg-blue-800 font-bold" : "hover:bg-blue-700"
              }`
            }
          > More
          </NavLink>

          {open&&(
            <ul className="absolute ml-50 bg-white text-black mt-2 rounded-lg shadow-lg w-40 p-2">
             <li className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"> 
              <NavLink
              to="/timer"  
              className={({ isActive }) =>
              `px-9 py-2 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full text-sm font-medium ${
                isActive ? "bg-blue-800 font-bold" : "hover:bg-blue-700"
              }`
            }>
              Timer</NavLink></li>

           <li className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"> 
            <NavLink
            to="/todo"  
            className={({ isActive }) =>
              `px-7 py-2 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full text-sm font-medium ${
                isActive ? "bg-blue-800 font-bold" : "hover:bg-blue-700"
              }`
            }>
              Todo List</NavLink></li>
            <li className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"> 
            <NavLink
            to="/product"  
            className={({ isActive }) =>
              `px-7 py-2 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full text-sm font-medium ${
                isActive ? "bg-blue-800 font-bold" : "hover:bg-blue-700"
              }`
            }>
              Products</NavLink></li>
            <li className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"> 
            <NavLink
            to="/modalbox"  
            className={({ isActive }) =>
              `px-7 py-2 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full text-sm font-medium ${
                isActive ? "bg-blue-800 font-bold" : "hover:bg-blue-700"
              }`
            }>
              Modal</NavLink></li>
            </ul>
          )}
          <button
        onClick={toggleTheme}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition-all duration-300 
             rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full px-6 py-2"
      >
        {theme === "light" ? "🌕" : "🌑"}
      </button>
          {/* */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;