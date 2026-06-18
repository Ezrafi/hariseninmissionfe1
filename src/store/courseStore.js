import { create } from 'zustand';
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} from '../services/api/courseService';

// Initial State
const initialState = {
  courses: [],
  selectedCourse: null,
  loading: false,
  error: null,
};

// Reducer — handle semua action types
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_COURSES':
      return { ...state, courses: action.payload };
    case 'SET_SELECTED_COURSE':
      return { ...state, selectedCourse: action.payload };
    case 'ADD_COURSE':
      return { ...state, courses: [action.payload, ...state.courses] };
    case 'UPDATE_COURSE':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.id === action.payload.id ? action.payload : course
        ),
      };
    case 'DELETE_COURSE':
      return {
        ...state,
        courses: state.courses.filter(course => course.id !== action.payload),
      };
    default:
      return state;
  }
};

//  Store — gabungkan initialState + reducer + API calls
const useCourseStore = create((set, get) => ({
  ...initialState,

  // Helper dispatch — menghubungkan reducer ke store
  dispatch: (action) => set(state => reducer(state, action)),

  // Fetch semua courses
  fetchCourses: async () => {
    const { dispatch } = get();
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });
      const res = await getAllCourses();
      dispatch({ type: 'SET_COURSES', payload: res.data });
    } catch (err) {
      console.error('Gagal fetch courses:', err.message);
      dispatch({ type: 'SET_ERROR', payload: 'Gagal memuat data kursus.' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  },

  // Fetch 1 course by id
  fetchCourseById: async (id) => {
    const { dispatch } = get();
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });
      const res = await getCourseById(id);
      dispatch({ type: 'SET_SELECTED_COURSE', payload: res.data });
    } catch (err) {
      console.error('Gagal fetch course:', err.message);
      dispatch({ type: 'SET_ERROR', payload: 'Gagal memuat data kursus.' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  },

  // Tambah course
  addCourse: async (data) => {
    const { dispatch } = get();
    try {
      dispatch({ type: 'SET_ERROR', payload: null });
      const res = await createCourse(data);
      dispatch({ type: 'ADD_COURSE', payload: res.data });
    } catch (err) {
      console.error('Gagal menambah course:', err.message);
      dispatch({ type: 'SET_ERROR', payload: 'Gagal menambah kursus.' });
    }
  },

  // Update course
  editCourse: async (id, data) => {
    const { dispatch } = get();
    try {
      dispatch({ type: 'SET_ERROR', payload: null });
      const res = await updateCourse(id, data);
      dispatch({ type: 'UPDATE_COURSE', payload: res.data });
    } catch (err) {
      console.error('Gagal update course:', err.message);
      dispatch({ type: 'SET_ERROR', payload: 'Gagal menyimpan perubahan.' });
    }
  },

  // Hapus course
  removeCourse: async (id) => {
    const { dispatch } = get();
    try {
      dispatch({ type: 'SET_ERROR', payload: null });
      await deleteCourse(id);
      dispatch({ type: 'DELETE_COURSE', payload: id });
    } catch (err) {
      console.error('Gagal hapus course:', err.message);
      dispatch({ type: 'SET_ERROR', payload: 'Gagal menghapus kursus.' });
    }
  },
}));

export default useCourseStore;