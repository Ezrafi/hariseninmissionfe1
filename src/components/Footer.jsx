import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-5">
            <img src={logo} alt="logo" className="h-[24px] mb-6" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang<br />
              +62-827-7123-1234
            </p>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Kategori</h4>
              <ul className="text-gray-500 text-sm space-y-3">
                <li className="hover:text-green-600 cursor-pointer">Digital & Teknologi</li>
                <li className="hover:text-green-600 cursor-pointer">Pemasaran</li>
                <li className="hover:text-green-600 cursor-pointer">Manajemen Bisnis</li>
                <li className="hover:text-green-600 cursor-pointer">Pengembangan Diri</li>
                <li className="hover:text-green-600 cursor-pointer">Desain</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Perusahaan</h4>
              <ul className="text-gray-500 text-sm space-y-3">
                <li className="hover:text-green-600 cursor-pointer">Tentang Kami</li>
                <li className="hover:text-green-600 cursor-pointer">FAQ</li>
                <li className="hover:text-green-600 cursor-pointer">Kebijakan Privasi</li>
                <li className="hover:text-green-600 cursor-pointer">Ketentuan Layanan</li>
                <li className="hover:text-green-600 cursor-pointer">Bantuan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Komunitas</h4>
              <ul className="text-gray-500 text-sm space-y-3">
                <li className="hover:text-green-600 cursor-pointer">Tips Sukses</li>
                <li className="hover:text-green-600 cursor-pointer">Blog</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-100 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            @2023 Gerobak Sayur All Rights Reserved.
          </p>
          
          {/* Social Icons (Pure SVG - No Import Needed) */}
          <div className="flex gap-4 text-gray-400">
            {/* LinkedIn */}
            <button className="hover:text-blue-700 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </button>
            {/* Facebook */}
            <button className="hover:text-blue-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </button>
            {/* Instagram */}
            <button className="hover:text-pink-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </button>
            {/* Twitter / X */}
            <button className="hover:text-black transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;