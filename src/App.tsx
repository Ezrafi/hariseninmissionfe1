import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Authenticated from './layouts/Authenticated';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CourseUpdate from './pages/CourseUpdate';
import useAuthStore from './store/authStore';

function App() {
  const checkAuth = useAuthStore((s) => s.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <Routes>
        <Route element={<Authenticated />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses/edit/:id" element={<CourseUpdate />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
