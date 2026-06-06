import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

// ✅ Buat instance axios khusus
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
        
      // The request was made and the server responded with a status code
    console.error(`Error ${error.response.status}:`, error.response.data);
    } else {
    console.error('Tidak ada koneksi ke server');
    }
    return Promise.reject(error);
}
);

export const getAllCourses = () => api.get('');
export const getCourseById = (id) => api.get(`/${id}`);
export const createCourse = (data) => api.post('', data);
export const updateCourse = (id, data) => api.put(`/${id}`, data);
export const deleteCourse = (id) => api.delete(`/${id}`);