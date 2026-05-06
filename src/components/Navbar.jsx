import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-20 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1200px] h-full mx-auto px-6 flex items-center justify-between">
        
        {/* Logo & Category */}
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={logo} alt="video belajar" className="h-[24px] w-auto object-contain" />
          </Link>
          {/* <button className="hidden md:block text-gray-600 font-medium hover:text-green-600 transition-colors">
            Kategori
          </button> */}
        </div>

        {/* User Profile / Avatar */}
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-gray-600 text-sm font-medium">Kategori</span>
          <div 
            className="w-10 h-10 rounded-lg overflow-hidden cursor-pointer border border-gray-200 hover:ring-2 hover:ring-green-500 transition-all"
            onClick={() => navigate('/login')} // Arahkan ke login saat diklik
          >
            <img 
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;