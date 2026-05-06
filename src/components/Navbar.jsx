import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = ['Digital & Teknologi', 'Pemasaran', 'Manajemen Bisnis', 'Pengembangan Diri', 'Desain'];

  return (
    <nav className="w-full h-20 bg-white border-b border-gray-100 sticky top-0 z-50 flex items-center justify-center">
      {/* 
          Container Utama: 
          - Mobile: px-6 (agar tidak terlalu mepet layar HP)
          - Desktop: px-[120px] (sesuai spesifikasi 1440px Anda)
      */}
      <div className="w-full max-w-[1440px] h-full px-6 md:px-[120px] flex items-center justify-between">
        
        {/* SISI KIRI: Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="video belajar" className="h-[24px] w-auto object-contain" />
        </Link>

        {/* SISI KANAN: Menu Desktop & Tombol Burger */}
        <div className="flex items-center">
          
          {/* Navigasi Desktop: Muncul hanya di layar besar */}
          <div className="hidden md:flex items-center gap-6 mr-6">
            <span className="text-gray-600 text-sm font-medium cursor-pointer hover:text-green-600 transition-colors">
              Kategori
            </span>
            <div 
              className="w-10 h-10 rounded-lg overflow-hidden cursor-pointer border border-gray-200"
              onClick={() => navigate('/login')}
            >
              <img 
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tombol Burger: Muncul hanya di layar mobile (md:hidden) */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Menggunakan Icon Menu dengan ukuran yang pas */}
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute left-0 right-0 top-20 z-40 shadow-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Kategori</h3>
            {categories.map((cat, i) => (
              <button 
                key={i}
                className="text-left text-gray-600 text-sm hover:text-green-600 py-3 border-b border-gray-50 last:border-b-0"
                onClick={() => setMenuOpen(false)}
              >
                {cat}
              </button>
            ))}
            <button 
              className="mt-4 w-full bg-green-500 text-white font-bold py-3 rounded-lg"
              onClick={() => {
                setMenuOpen(false);
                navigate('/login');
              }}
            >
              Masuk / Daftar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;