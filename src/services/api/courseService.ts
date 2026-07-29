import axios from 'axios';
import type { Course, CourseFormData } from '../../types';

const BASE_URL = import.meta.env.VITE_API_URL as string;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout');
    } else if (error.response) {
      console.error(`Error ${error.response.status}:`, error.response.data);
    } else {
      console.error('Tidak ada koneksi ke server');
    }
    return Promise.reject(error);
  }
);

export const getAllCourses = () => api.get<Course[]>('');
export const getCourseById = (id: string | number) => api.get<Course>(`/${id}`);
export const createCourse = (data: CourseFormData) => api.post<Course>('', data);
export const updateCourse = (id: string | number, data: CourseFormData) => api.put<Course>(`/${id}`, data);
export const deleteCourse = (id: string | number) => api.delete(`/${id}`);
