import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import newsletterBg from '../assets/newsletter.jpg';
import { getAllCourses, createCourse, deleteCourse } from '../services/api/courseService';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch semua course dari MockAPI saat pertama load
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await getAllCourses();
        setCourses(res.data);
      } catch (err) {
        console.error('Gagal memuat kursus:', err.message);
        setError('Gagal memuat data kursus.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // ✅ Hapus course dari MockAPI
  const handleDeleteCourse = async (id) => {
    try {
      await deleteCourse(id);
      setCourses(courses.filter(item => item.id !== id));
    } catch (err) {
      console.error('Gagal menghapus kursus:', err.message);
      alert('Gagal menghapus kursus.');
    }
  };

  // ✅ Tambah course ke MockAPI
  const handleAddCourse = async () => {
    try {
      const newCourse = {
        image: `https://picsum.photos/400/250?random=${Date.now()}`,
        title: "Kursus Baru Hariesok",
        desc: "Mulai transformasi dengan instruktur profesional...",
        instructor: "Hariesok Team",
        role: "Senior Expert at Company",
        instImage: `https://i.pravatar.cc/150?u=${Date.now()}`,
        price: "Rp 500K",
        rating: "5.0",
        reviews: "10"
      };
      const res = await createCourse(newCourse);
      setCourses([res.data, ...courses]);
    } catch (err) {
      console.error('Gagal menambah kursus:', err.message);
      alert('Gagal menambah kursus.');
    }
  };

  // State loading
  if (loading) return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[120px] py-[64px] text-center">
      <p className="text-gray-500 font-dmsans text-lg animate-pulse">Memuat kursus...</p>
    </div>
  );

  // State error
  if (error) return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[120px] py-[64px] text-center">
      <p className="text-red-500 font-dmsans text-lg">{error}</p>
    </div>
  );

  return (
    /* WRAPPER UTAMA: 
      - px-4 di mobile agar ada space aman di kanan-kiri layar HP.
      - md:px-[120px] di desktop agar kembali ke spesifikasi Figma Anda.
      - gap-8 di mobile dan gap-[64px] di desktop agar jarak antar section proporsional.
    */
    <div className="w-full max-w-[1440px] mx-auto pb-[64px] px-4 md:px-[120px] flex flex-col gap-8 md:gap-[64px] mt-8 overflow-hidden">

      {/* HERO SECTION */}
      <section
        className="relative w-full max-w-[1200px] min-h-[300px] md:h-[400px] mx-auto flex items-center justify-center text-center px-4 sm:px-10 md:px-[140px] py-8 md:py-0 bg-cover bg-center rounded-[10px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200')`
        }}
      >
        <div className="max-w-3xl text-white flex flex-col items-center gap-[16px] md:gap-[24px]">
          <h1 className="text-[20px] md:text-[24px] font-bold font-poppins leading-[120%] text-center">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
          </h1>
          <p className="text-gray-200 font-dmsans text-[14px] md:text-[16px] max-w-xl">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
          </p>
          <button className="w-full sm:w-[280px] h-[40px] bg-[#3ECF4C] hover:bg-green-600 text-white font-bold font-dmsans text-[14px] rounded-[10px] transition-colors flex items-center justify-center">
            Temukan Video Course untuk Dipelajari
          </button>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="w-full max-w-[1200px] mx-auto">
        <h2 className="text-[22px] md:text-[28px] font-bold text-gray-800 font-poppins">Koleksi Video Pembelajaran Unggulan</h2>
        <p className="text-gray-500 mb-6 md:mb-8 font-dmsans text-[14px] md:text-[16px]">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>

        {/* Tab Categories */}
        <div className="flex gap-6 md:gap-8 border-b border-gray-200 mb-8 overflow-x-auto whitespace-nowrap scrollbar-none">
          {['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'].map((tab, i) => (
            <button key={i} className={`pb-4 text-sm md:text-base font-medium font-dmsans ${i === 0 ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Kontrol Tambah Kursus: Dibuat Flex-Col pada mobile agar tidak menumpuk */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-[22px] md:text-[28px] font-bold font-poppins text-gray-800">Koleksi Video Unggulan</h2>
          <button
            onClick={handleAddCourse}
            className="w-full sm:w-auto bg-[#FFBD12] text-black px-6 py-2.5 rounded-lg font-bold hover:shadow-lg transition-all text-sm md:text-base"
          >
            + Tambah Kursus
          </button>
        </div>

        {/* List Grid Kursus */}
        {courses.length === 0 ? (
          <div className="text-center py-[64px]">
            <p className="text-gray-400 font-dmsans text-lg">Belum ada kursus tersedia.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                id={course.id}
                onDelete={() => handleDeleteCourse(course.id)}
              />
            ))}
          </div>
        )}
      </main>

      {/* NEWSLETTER BANNER (Sesuai Spesifikasi Figma & Responsive) */}
      <section className="relative w-full max-w-[1200px] min-h-[350px] md:h-[400px] mx-auto rounded-[4px] opacity-100 rotate-0 overflow-hidden flex items-center justify-center py-10 md:py-0">
        <img src={newsletterBg} alt="Newsletter" className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" />
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
          <p className="text-xs md:text-sm tracking-widest font-bold opacity-90 font-dmsans uppercase">NEWSLETTER</p>
          <h2 className="text-[24px] md:text-[36px] font-bold mt-2 font-poppins leading-tight">Mau Belajar Lebih Banyak?</h2>
          <p className="mt-3 text-[14px] md:text-[16px] opacity-80 font-dmsans max-w-md">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
          
          {/* Input Box: Berubah jadi vertical stack pada layar sangat kecil agar aman */}
<div className="mt-6 flex flex-col items-center gap-3 w-full sm:flex-row sm:max-w-md sm:bg-white sm:p-1 sm:rounded-lg sm:gap-0 sm:shadow-md">
  
  {/* FORM EMAIL (Kotak Mandiri di Mobile) */}
  <input 
    type="email" 
    placeholder="Masukkan Email Anda" 
    className="w-[280px] h-[40px] bg-white text-black text-sm outline-none shadow-md rounded-[10px] pt-[10px] pb-[10px] pl-[12px] pr-[8px] sm:w-full sm:h-auto sm:bg-transparent sm:p-2 sm:shadow-none sm:rounded-none" 
  />
  
  {/* TOMBOL SUBSCRIBE (Kotak Mandiri di Mobile) */}
  <button className="w-[280px] h-[40px] bg-[#FFBD12] hover:bg-yellow-500 text-white font-bold text-sm transition-colors whitespace-nowrap flex items-center justify-center shadow-md rounded-[10px] sm:w-auto sm:h-auto sm:px-6 sm:py-2 sm:rounded-md">
    Subscribe
  </button>
</div>
        </div>
      </section>
    </div>
  );
};

export default Home;