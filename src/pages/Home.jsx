import React from 'react';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import newsletterBg from '../assets/newsletter.jpg';

const Home = () => {
  const titles = [
    "Big 4 Auditor Financial Analyst", 
    "Mastering React Modern 2024", 
    "Digital Marketing Strategy", 
    "UI/UX Design Fundamental",
    "Manajemen Bisnis Retail"
  ];

  const instructors = ["Jenna Ortega", "Anya Taylor", "Thomas Shelby", "Margo Robbie"];

  const courses = Array.from({ length: 9 }, (_, i) => ({
    image: `https://picsum.photos/400/250?random=${i}`, 
    title: titles[i % titles.length],
    desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum standar industri.",
    instructor: instructors[i % instructors.length],
    role: "Senior Expert at Company",
    instImage: `https://i.pravatar.cc/150?u=${i}`, 
    price: i % 2 === 0 ? "Rp 300K" : "Rp 450K",
    rating: (4.0 + (i % 10) / 10).toFixed(1), 
    reviews: `${(i + 1) * 123}`
  }));

  return (

    /* WRAPPER UTAMA: bg-color, min-h, dan font */
    <div className="min-h-screen bg-[#FFFDF5] opacity-100 rotate-0 font-sans">
      
      <div className="max-w-[1440px] mx-auto pb-[64px] px-4 sm:px-6 md:px-8 lg:px-[120px] flex flex-col gap-[64px]">
        
        <Navbar />

        {/* HERO SECTION: h-400, rounded-10 */}
        <section 
          className="relative w-full h-[400px] flex items-center justify-center text-center pt-[82px] px-6 sm:px-10 md:px-[140px] pb-[64px] bg-cover bg-center rounded-[10px] overflow-hidden" 
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200')`
          }}
        >
          <div className="max-w-3xl text-white flex flex-col items-center gap-[24px]">
            <h1 className="text-[20px] md:text-[24px] font-bold font-poppins leading-[110%] tracking-[0%] text-center text-white">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className="text-gray-200 font-dmsans text-[16px]">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
            </p>
            <button className="w-[280px] h-[40px] bg-[#3ECF4C] hover:bg-green-600 text-white font-bold font-dmsans text-[14px] rounded-[10px] opacity-100 rotate-0 transition-colors flex items-center justify-center">
              Temukan Video Course untuk Dipelajari
            </button>
          </div>
        </section>

        {/* BODY - COURSE GRID: Tanpa padding ganda karena sudah diatur container utama */}
        <main className="w-full">
          <h2 className="text-[28px] font-bold text-gray-800 font-poppins">Koleksi Video Pembelajaran Unggulan</h2>
          <p className="text-gray-500 mb-8 font-dmsans">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>

          {/* Tab Categories */}
          <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto whitespace-nowrap">
            {['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'].map((tab, i) => (
              <button key={i} className={`pb-4 font-medium font-dmsans ${i === 0 ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Grid Kursus */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </main>

        {/* NEWSLETTER BANNER: h-400, rounded-4 */}
        <section className="w-full">
          <div 
            className="w-full h-[400px] rounded-[4px] flex flex-col items-center justify-center text-center text-white relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${newsletterBg})` }}
          >
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div className="relative z-10 px-4 flex flex-col items-center">
              <p className="text-sm uppercase tracking-widest mb-2 font-dmsans opacity-90">Newsletter</p>
              <h2 className="text-[32px] md:text-[40px] font-bold mb-4 font-poppins leading-tight">Mau Belajar Lebih Banyak?</h2>
              <p className="mb-8 font-dmsans text-[16px] opacity-90 max-w-xl">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial!</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-md">
                <input type="email" placeholder="Masukkan Emailmu" className="px-4 py-3 rounded-[4px] text-gray-800 flex-grow outline-none font-dmsans h-[50px]" />
                <button className="bg-orange-400 hover:bg-orange-500 px-8 py-3 rounded-[4px] font-bold transition-colors font-dmsans h-[50px] whitespace-nowrap">Subscribe</button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;