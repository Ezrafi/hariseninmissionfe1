import { create } from 'zustand';
import type { Course, CourseFormData, CourseState, CourseAction } from '../types';
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} from '../services/api/courseService';

const initialState = {
  courses: [] as Course[],
  selectedCourse: null as Course | null,
  loading: false,
  error: null as string | null,
};

const reducer = (state: CourseState, action: CourseAction): CourseState => {
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
        courses: state.courses.map((course) =>
          course.id === action.payload.id ? action.payload : course
        ),
      };
    case 'DELETE_COURSE':
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };
    default:
      return state;
  }
};

const useCourseStore = create<CourseState>((set, get) => ({
  ...initialState,

  dispatch: (action: CourseAction) => set((state) => reducer(state, action)),

  fetchCourses: async () => {
    const { dispatch } = get();
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });
      const res = await getAllCourses();
      dispatch({ type: 'SET_COURSES', payload: res.data });
    } catch (err) {
      console.error('Gagal fetch courses:', (err as Error).message);
      dispatch({ type: 'SET_ERROR', payload: 'Gagal memuat data kursus.' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  },

  fetchCourseById: async (id: string | number | undefined) => {
    const { dispatch } = get();
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });
      const res = await getCourseById(id!);
      dispatch({ type: 'SET_SELECTED_COURSE', payload: res.data });
    } catch (err) {
      console.error('Gagal fetch course:', (err as Error).message);
      dispatch({ type: 'SET_ERROR', payload: 'Gagal memuat data kursus.' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  },

  addCourse: async (data: CourseFormData) => {
    const { dispatch } = get();
    try {
      dispatch({ type: 'SET_ERROR', payload: null });
      const res = await createCourse(data);
      dispatch({ type: 'ADD_COURSE', payload: res.data });
    } catch (err) {
      console.error('Gagal menambah course:', (err as Error).message);
      dispatch({ type: 'SET_ERROR', payload: 'Gagal menambah kursus.' });
    }
  },

  editCourse: async (id: string | number | undefined, data: CourseFormData) => {
    const { dispatch } = get();
    try {
      dispatch({ type: 'SET_ERROR', payload: null });
      const res = await updateCourse(id!, data);
      dispatch({ type: 'UPDATE_COURSE', payload: res.data });
    } catch (err) {
      console.error('Gagal update course:', (err as Error).message);
      dispatch({ type: 'SET_ERROR', payload: 'Gagal menyimpan perubahan.' });
    }
  },

  removeCourse: async (id: string | number) => {
    const { dispatch } = get();
    try {
      dispatch({ type: 'SET_ERROR', payload: null });
      await deleteCourse(id);
      dispatch({ type: 'DELETE_COURSE', payload: id });
    } catch (err) {
      console.error('Gagal hapus course:', (err as Error).message);
      dispatch({ type: 'SET_ERROR', payload: 'Gagal menghapus kursus.' });
    }
  },
}));

export default useCourseStore;
