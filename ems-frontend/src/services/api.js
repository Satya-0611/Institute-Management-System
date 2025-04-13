import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // Replace with your backend URL

// Teacher APIs
export const getTeachers = () => axios.get(`${API_BASE_URL}/teachers`);
export const getTeacherById = (id) => axios.get(`${API_BASE_URL}/teachers/${id}`);
export const addTeacher = (teacher) => axios.post(`${API_BASE_URL}/teachers`, teacher);
export const updateTeacher = (id, teacher) => axios.put(`${API_BASE_URL}/teachers/${id}`, teacher);
export const deleteTeacher = (id) => axios.delete(`${API_BASE_URL}/teachers/${id}`);

// Student APIs
export const getStudents = () => axios.get(`${API_BASE_URL}/students`);
export const getStudentById = (id) => axios.get(`${API_BASE_URL}/students/${id}`);
export const addStudent = (student) => axios.post(`${API_BASE_URL}/students`, student);
export const updateStudent = (id, student) => axios.put(`${API_BASE_URL}/students/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${API_BASE_URL}/students/${id}`);