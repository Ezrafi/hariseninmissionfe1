import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

// GET semua course
export const getAllCourses = () => axios.get(BASE_URL);

// GET 1 course by id
export const getCourseById = (id) => axios.get(`${BASE_URL}/${id}`);

// POST tambah course baru
export const createCourse = (data) => axios.post(BASE_URL, data);

// PUT update course
export const updateCourse = (id, data) => axios.put(`${BASE_URL}/${id}`, data);

// DELETE hapus course
export const deleteCourse = (id) => axios.delete(`${BASE_URL}/${id}`);