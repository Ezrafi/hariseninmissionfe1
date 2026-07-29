import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useAuthStore from '../store/authStore';

const Authenticated = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF5]">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default Authenticated;
