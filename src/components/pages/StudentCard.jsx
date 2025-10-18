import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api";
import { FaEnvelope, FaPhone, FaUser, FaGraduationCap, FaMapMarkerAlt, FaEdit, FaTrash } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

const StudentCard = () => {
  const {theme}= useContext (ThemeContext);
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await API.get(`/${id}`);
        setStudent(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudent();
  }, [id]);

  const handleDelete = async () => {
    try {
      await API.delete(`/${id}`);
      navigate("/list"); // go back to student list after delete
    } catch (error) {
      console.error(error);
    }
  };

  if (!student) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center gap-6"
     style={{
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#111827",
      }}>

      {/* Buttons at top */}
      <div className="w-full flex justify-between mb-4">
        <button
          onClick={() => navigate(`/list/edit/${id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaEdit /> Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaTrash /> Delete
        </button>
      </div>

      {/* Avatar */}
      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl font-bold text-blue-600">
        {student.name.charAt(0)}
      </div>

      {/* Student Details */}
      <h2 className="text-2xl font-bold text-center">{student.name}</h2>
      <div className="space-y-2 w-full">
        <p className="flex items-center gap-2"><FaEnvelope /> {student.email}</p>
        <p className="flex items-center gap-2"><FaPhone /> {student.phone}</p>
        <p className="flex items-center gap-2"><FaUser /> {student.gender}</p>
        <p className="flex items-center gap-2"><FaMapMarkerAlt /> {student.address}</p>
        <p className="flex items-center gap-2"><FaGraduationCap /> {student.course}</p>
      </div>
    </div>
  );
};

export default StudentCard;
