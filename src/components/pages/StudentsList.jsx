import React, { useContext, useEffect, useState } from "react";
import API from "../../api";
import { Link } from "react-router-dom";
import { FaPlus, FaTrash, FaEdit} from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

const StudentList = () => {
  const {theme}= useContext (ThemeContext);
  const [students, setStudents] = useState([]);

  const fetchData = async () => {
    try {
      const res = await API.get("");
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Students</h2>
        <Link
          to="/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full flex gap-1 items-center"
        >
          <FaPlus /> Add Student
        </Link>
      </div>

      {students.length > 0 ? (
        <table className="w-full border-collapse border border-gray-400"
        style={{
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#111827",
      }}>
          <thead>
            <tr className="border ">
              <th className="border border-gray-400 p-2">ID</th>
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400 p-2">Email</th>
              <th className="border border-gray-400 p-2">Phone</th>
              <th className="border border-gray-400 p-2">Gender</th>
              <th className="border border-gray-400 p-2">Address</th>
              <th className="border border-gray-400 p-2">Course</th>
              <th className="border border-gray-400 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
                
              <tr key={student._id}>
                <td className="border border-gray-400 p-2"><Link to={`/student/${student._id}`} className="  hover:text-blue-600 hover:underline">{student._id}</Link></td>
                <td className="border border-gray-400 p-2">{student.name}</td>
                <td className="border border-gray-400 p-2">{student.email}</td>
                <td className="border border-gray-400 p-2">{student.phone}</td>
                <td className="border border-gray-400 p-2">{student.gender}</td>
                <td className="border border-gray-400 p-2">{student.address}</td>
                <td className="border border-gray-400 p-2">{student.course}</td>
                
                <td className="flex gap-2 justify-evenly border border-gray-400 p-2 text-center">
                    <Link
                   to={`edit/${student._id}`}
                   className="gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-tl-full rounded-tr-none rounded-br-full rounded-bl-none flex items-center justify-center "
                    >
                   <FaEdit/> Edit
                 </Link>
                  <button
                    onClick={() => handleDelete(student._id)}
                    className="gap-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full flex items-center justify-center"
                  >
                    <FaTrash /> Delete
                  </button>
                   
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Students Found</p>
      )}
    </div>
  );
};

export default StudentList;
