export interface Course {
  id: string | number;
  image: string;
  title: string;
  desc: string;
  instructor: string;
  role: string;
  instImage: string;
  price: string;
  rating: string;
  reviews: string;
}

export interface CourseFormData {
  image?: string;
  title: string;
  desc: string;
  instructor: string;
  role?: string;
  instImage?: string;
  price: string;
  rating: string;
  reviews: string;
}

export type CourseAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_COURSES'; payload: Course[] }
  | { type: 'SET_SELECTED_COURSE'; payload: Course }
  | { type: 'ADD_COURSE'; payload: Course }
  | { type: 'UPDATE_COURSE'; payload: Course }
  | { type: 'DELETE_COURSE'; payload: string | number };

export interface CourseState {
  courses: Course[];
  selectedCourse: Course | null;
  loading: boolean;
  error: string | null;
  dispatch: (action: CourseAction) => void;
  fetchCourses: () => Promise<void>;
  fetchCourseById: (id: string | number | undefined) => Promise<void>;
  addCourse: (data: CourseFormData) => Promise<void>;
  editCourse: (id: string | number | undefined, data: CourseFormData) => Promise<void>;
  removeCourse: (id: string | number) => Promise<void>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  createdAt?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
  clearError: () => void;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  onIconClick?: () => void;
}

export interface LoginFormProps {
  onSubmit: (e: React.FormEvent) => void;
  onNavigateToRegister: () => void;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
  email: string;
  onEmailChange: (v: string) => void;
  password: string;
  onPasswordChange: (v: string) => void;
  loading: boolean;
}

export interface RegisterFormProps {
  onSubmit: (e: React.FormEvent) => void;
  onNavigateToLogin: () => void;
  showPass: boolean;
  setShowPass: (v: boolean) => void;
  showConfirmPass: boolean;
  setShowConfirmPass: (v: boolean) => void;
  name: string;
  onNameChange: (v: string) => void;
  email: string;
  onEmailChange: (v: string) => void;
  phone: string;
  onPhoneChange: (v: string) => void;
  password: string;
  onPasswordChange: (v: string) => void;
  confirmPassword: string;
  onConfirmPasswordChange: (v: string) => void;
  loading: boolean;
}

export interface CourseCardProps {
  id: string | number;
  image: string;
  title: string;
  desc: string;
  instructor: string;
  role: string;
  instImage: string;
  price: string;
  rating: string;
  reviews: string;
  onDelete: () => void;
}

export interface CourseFormProps {
  initialData: Course;
  onSubmit: (data: CourseFormData) => void;
  onCancel: () => void;
  submitting: boolean;
}
