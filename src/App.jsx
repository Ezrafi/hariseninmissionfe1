import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authenticated from './layouts/Authenticated'; // Import Layout baru
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CourseUpdate from './pages/CourseUpdate';

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman yang butuh Navbar & Footer (Login required) */}
        <Route element={<Authenticated />}>
          <Route path="/" element={<Home />} />
          {/* Kamu bisa tambah route lain di sini, misal: */}
          {/* <Route path="/my-course" element={<MyCourse />} /> */}
        </Route>

        {/* Halaman yang TIDAK butuh Navbar/Footer utama (Auth page) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses/edit/:id" element={<CourseUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;

