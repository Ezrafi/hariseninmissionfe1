import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X, User, BookOpen, CreditCard, LogOut } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State untuk dropdown profil

  const categories = ['Digital & Teknologi', 'Pemasaran', 'Manajemen Bisnis', 'Pengembangan Diri', 'Desain'];

  // Data untuk menu profil
  const profileMenu = [
    { label: 'Profil Saya', icon: <User size={18} />, path: '/profile' },
    { label: 'Kelas Saya', icon: <BookOpen size={18} />, path: '/my-classes' },
    { label: 'Pesanan Saya', icon: <CreditCard size={18} />, path: '/orders' },
  ];

  return (
    <nav className="w-full h-20 bg-white border-b border-gray-100 sticky top-0 z-50 flex items-center justify-center">
      <div className="w-full max-w-[1440px] h-full px-6 md:px-[120px] flex items-center justify-between">
        
        {/* SISI KIRI: Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="video belajar" className="h-[24px] w-auto object-contain" />
        </Link>

        {/* SISI KANAN */}
        <div className="flex items-center">
          
          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center gap-6 mr-6">
            <span className="text-gray-600 text-sm font-medium cursor-pointer hover:text-green-600 transition-colors font-dmsans">
              Kategori
            </span>

            {/* Avatar & Dropdown Container */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={dropdownOpen}
                className="w-10 h-10 rounded-lg overflow-hidden border border-gray-200 hover:ring-2 hover:ring-green-500 transition-all"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img 
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </button>

              {/* DROPDOWN MENU (Sesuai Spesifikasi Figma) */}
              {dropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-[200px] h-[226px] bg-white border border-gray-100 shadow-xl rounded-b-[4px] py-[4px] z-50 opacity-100 rotate-0"
                >
                  {profileMenu.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        navigate(item.path);
                        setDropdownOpen(false);
                      }}
                      className="w-[200px] h-[54px] px-[12px] py-[16px] flex items-center gap-[5px] border-b border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors font-dmsans text-sm opacity-100"
                    >
                      <span className="text-gray-500">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}

                  {/* Tombol Keluar */}
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate('/login');
                    }}
                    className="w-[200px] h-[54px] px-[12px] py-[16px] flex items-center gap-[5px] text-red-500 hover:bg-red-50 transition-colors font-dmsans text-sm opacity-100"
                  >
                    <LogOut size={18} />
                    Keluar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Tombol Burger Mobile */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (Kategori & Logout Mobile) */}
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