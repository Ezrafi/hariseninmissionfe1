import React, { useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import newsletterBg from '../assets/newsletter.jpg';
import useCourseStore from '../store/courseStore';

const Home = () => {
  //  Ambil state dan actions dari store
  const { courses, loading, error, fetchCourses, addCourse, removeCourse } = useCourseStore();

  //  Fetch courses saat pertama load
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleAddCourse = () => {
    addCourse({
      image: `https://picsum.photos/400/250?random=${Date.now()}`,
      title: "Kursus Baru Hariesok",
      desc: "Mulai transformasi dengan instruktur profesional...",
      instructor: "Hariesok Team",
      role: "Senior Expert at Company",
      instImage: `https://i.pravatar.cc/150?u=${Date.now()}`,
      price: "Rp 500K",
      rating: "5.0",
      reviews: "10"
    });
  };

  if (loading) return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px] py-[64px] text-center">
      <p className="text-gray-500 font-dmsans text-lg">Memuat kursus...</p>
    </div>
  );

  if (error) return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px] py-[64px] text-center">
      <p className="text-red-500 font-dmsans text-lg">{error}</p>
    </div>
  );

  return (
    <div className="max-w-[1440px] mx-auto pb-[64px] px-4 lg:px-[120px] flex flex-col gap-[64px] mt-8">

      <section
        className="relative w-full h-[400px] flex items-center justify-center text-center px-6 sm:px-10 md:px-[140px] bg-cover bg-center rounded-[10px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200')`
        }}
      >
        <div className="max-w-3xl text-white flex flex-col items-center gap-[24px]">
          <h1 className="text-[20px] md:text-[24px] font-bold font-poppins leading-[110%] text-center">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
          </h1>
          <p className="text-gray-200 font-dmsans text-[16px]">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
          </p>
          <button className="w-[280px] h-[40px] bg-[#3ECF4C] hover:bg-green-600 text-white font-bold font-dmsans text-[14px] rounded-[10px] transition-colors">
            Temukan Video Course untuk Dipelajari
          </button>
        </div>
      </section>

      <main className="w-full">
        <h2 className="text-[28px] font-bold text-gray-800 font-poppins">Koleksi Video Pembelajaran Unggulan</h2>
        <p className="text-gray-500 mb-8 font-dmsans">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>

        <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto whitespace-nowrap">
          {['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'].map((tab, i) => (
            <button key={i} className={`pb-4 font-medium font-dmsans ${i === 0 ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[28px] font-bold font-poppins">Koleksi Video Unggulan</h2>
          <button
            onClick={handleAddCourse}
            className="bg-[#FFBD12] text-black px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all"
          >
            + Tambah Kursus
          </button>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-[64px]">
            <p className="text-gray-400 font-dmsans text-lg">Belum ada kursus tersedia.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                id={course.id}
                onDelete={() => removeCourse(course.id)}
              />
            ))}
          </div>
        )}
      </main>

      <section className="relative w-full h-[400px] rounded-[20px] overflow-hidden flex items-center justify-center">
        <img src={newsletterBg} alt="Newsletter" className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <div className="relative text-center text-white px-4">
          <h3 className="text-lg font-medium opacity-90">NEWSLETTER</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Mau Belajar Lebih Banyak?</h2>
          <p className="mt-4 opacity-80">Daftarkan emailmu untuk info kursus terbaru dan promo menarik!</p>
          <div className="mt-8 flex max-w-md mx-auto bg-white rounded-lg p-1">
            <input type="email" placeholder="Masukkan Email Anda" className="flex-1 px-4 py-2 text-black outline-none" />
            <button className="bg-[#FFBD12] text-black px-6 py-2 rounded-md font-bold">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;