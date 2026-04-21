import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundImut = () => {
  return (
    // Gunakan background pastel yang sangat muda (misal: pink muda atau kuning muda)
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 px-6 py-10 font-sans">
      
      {/* --- AREA KONTEN UTAMA --- */}
      <div className="text-center bg-white p-10 md:p-16 rounded-3xl shadow-xl shadow-pink-100/50 border border-pink-100 flex flex-col items-center max-w-lg w-full transform transition-all hover:scale-[1.01]">
        
        {/* 1. Ilustrasi/Ikon Imut (Menggunakan SVG Hewan Tersesat) */}
        {/* Kita beri animasi bounce pelan agar terasa hidup */}
        <div className="animate-bounce-slow mb-6">
          <svg 
            width="120" 
            height="120" 
            viewBox="0 0 120 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-pink-400" // Warna utama ikon
          >
            {/* Badannya (Bulat & Lembut) */}
            <circle cx="60" cy="65" r="45" fill="currentColor" fillOpacity="0.2"/>
            <path d="M60 20C79.33 20 95 35.67 95 55V75C95 86.0457 86.0457 95 75 95H45C33.9543 95 25 86.0457 25 75V55C25 35.67 40.67 20 60 20Z" fill="currentColor"/>
            
            {/* Telinga Imut */}
            <circle cx="40" cy="30" r="12" fill="currentColor"/>
            <circle cx="80" cy="30" r="12" fill="currentColor"/>
            
            {/* Mata Bingung (x _ x) */}
            <path d="M45 55L55 65M55 55L45 65" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M65 55L75 65M75 55L65 65" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            
            {/* Mulut Sedikit Sedih */}
            <path d="M52 80C55 78 65 78 68 80" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>

        {/* 2. Angka 404 (Warna Pastel Lembut) */}
        <h1 className="text-7xl md:text-8xl font-black text-pink-500 tracking-tighter mb-4 opacity-90 relative">
          404
          {/* Badge kecil melayang */}
          <span className="absolute -top-3 -right-6 bg-yellow-300 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full rotate-12 shadow-md">
            Waduh!
          </span>
        </h1>
        
        {/* 3. Pesan Utama (Lebih Ramah) */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-3 leading-tight">
          Yahh, Halamannya Tersesat! <span className="text-3xl">😿</span>
        </h2>
        
        {/* 4. Deskripsi (Bahasa Santai) */}
        <p className="text-gray-600 mb-10 text-center max-w-sm text-base leading-relaxed">
          Maaf ya, sepertinya halaman yang kamu cari sedang sembunyi atau mungkin sudah pindah rumah. Jangan sedih, ayo kita cari jalan pulang!
        </p>
        
        {/* 5. Tombol Aksi (Bulat, Pastel, Menarik) */}
        <Link 
          to="/" 
          className="group flex items-center gap-2 px-8 py-3.5 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-all duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-0.5 active:scale-95"
        >
          {/* Ikon rumah kecil di dalam tombol */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-pulse" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011-1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Antar Aku Pulang ke Beranda
        </Link>
      </div>

      {/* --- ELEMEN DEKORATIF LATAR BELAKANG --- */}
      {/* Lingkaran-lingkaran pastel samar di latar belakang */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
      
      {/* Tambahkan sedikit CSS kustom untuk animasi di file CSS utama Anda atau di dalam <style> tag jika perlu */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default NotFoundImut;