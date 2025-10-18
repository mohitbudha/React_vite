import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaUsers } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

const HomePage = () => {
  const {theme}= useContext (ThemeContext);
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4"
    style={{
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#111827",
      }}>
      
      <div className=" shadow-lg rounded-xl p-8 text-center max-w-2xl"
      >
        <h1 className="text-4xl font-bold mb-4">Student Management System</h1>
        <p className=" mb-8">
          Welcome! Manage your students easily. Add new students, view all records, edit or delete any student details in one place.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/add"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-tr-none rounded-br-full rounded-tl-full rounded-bl-none flex items-center gap-2 transition"
          >
            <FaPlus /> Add Student
          </Link>
          <Link
            to="/list"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-tr-full dounded-br-none rounded-tl-none rounded-bl-full flex items-center gap-2 transition"
          >
            <FaUsers /> View Students
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default HomePage;
