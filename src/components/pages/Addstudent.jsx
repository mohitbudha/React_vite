import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import { ThemeContext } from "../../context/ThemeContext";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  course: Yup.string().required("Course is required"),
});
const AddStudent = () => {
  const {theme}= useContext (ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6"
     style={{
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#111827",
      }}>
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Student</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          course: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await API.post("", values);
          resetForm();
          navigate("/list");
        }}
      >
          <Form className="space-y-4"
         >
                          <div>
                            <label className="block mb-1 font-medium ">Name</label>
                            <Field name="name" className="w-full border p-2 rounded" />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 font-medium ">Email</label>
                            <Field name="email" className="w-full border p-2 rounded" />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 font-medium ">Phone</label>
                            <Field name="phone" className="w-full border p-2 rounded" />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 font-medium ">Address</label>
                            <Field name="address" className="w-full border p-2 rounded" />
                            <ErrorMessage
                              name="address"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 font-medium">Gender</label>
                            <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2">
                            <Field type="radio" name="gender" value="Male" />
                             Male
                            </label>
                            <label className="flex items-center gap-2">
                            <Field type="radio" name="gender" value="Female" />
                            Female
                            </label>
                            <label className="flex items-center gap-2">
                            <Field type="radio" name="gender" value="Other" />
                             Other
                            </label>
                            </div>
                
                            <ErrorMessage
                             name="gender"
                             component="div"
                             className="text-red-500 text-sm"
                            />
                          </div>
                
                          <div>
                            <label className="block mb-1 font-medium ">Course</label>
                            <Field name="course" className="w-full border p-2 rounded" />
                            <ErrorMessage
                              name="course"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
                          >
                            Add Student
                          </button>
                        </Form>
      </Formik>
    </div>
  );
};

export default AddStudent;