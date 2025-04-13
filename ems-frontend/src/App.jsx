import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthForm from "./Components/AuthForm";
import AdminPanel from './Components/AdminPanel';

// Teacher Management Components
import TeacherManagement from "./Components/TeacherManagement";
import ListAllTeachers from "./Components/ListAllTeachers";
import AddTeacher from "./Components/AddTeacher";
import GetTeacherById from "./Components/GetTeacherById";
import UpdateTeacher from "./Components/UpdateTeacher";
import DeleteTeacher from "./Components/DeleteTeacher";

// Student Management Components
import StudentManagement from "./Components/StudentManagement";
import ListAllStudents from "./Components/ListAllStudents";
import AddStudent from "./Components/AddStudent";
import GetStudentById from "./Components/GetStudentById";
import UpdateStudent from "./Components/UpdateStudent";
import DeleteStudent from "./Components/DeleteStudent";

const App = () => {
  // State for teachers and students
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/manage-teachers" element={<TeacherManagement />} />
        <Route path="/manage-students" element={<StudentManagement />} />

        {/* Teacher Management Routes */}
        < Route path="/teachers"
          element={<TeacherManagement />}
        />
        <Route
          path="/teachers/list-all"
          element={<ListAllTeachers />}
        />
        <Route
          path="/teachers/add"
          element={<AddTeacher />}
        />
        <Route
          path="/teachers/get-by-id"
          element={<GetTeacherById />}
        />
        <Route
          path="/teachers/update"
          element={<UpdateTeacher />}
        />
        <Route
          path="/teachers/delete"
          element={<DeleteTeacher />}
        />

        {/* Student Management Routes */}
        <Route path="/students" element={<StudentManagement />} />
        <Route
          path="/students/list-all"
          element={<ListAllStudents />}
        />
        <Route
          path="/students/add"
          element={<AddStudent />}
        />
        <Route
          path="/students/get-by-id"
          element={<GetStudentById />}
        />
        <Route
          path="/students/update"
          element={<UpdateStudent />}
        />
        <Route
          path="/students/delete"
          element={<DeleteStudent />}
        />
      </Routes>
    </Router>
  );
};

export default App;