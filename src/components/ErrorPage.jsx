import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import {
  FaHome,
  FaExclamationTriangle,
  FaShieldAlt,
  FaLock,
  FaUserSlash,
  FaSearch,
} from 'react-icons/fa';

const ErrorPage = ({ 
  code = "404", 
  description = "Page Not Found", 
  image = "lost-cat",
  suggestion = "Kembali ke Beranda"
}) => {
  // Konfigurasi error spesifik
  const errorConfig = {
    '400': {
      icon: FaExclamationTriangle,
      title: "Bad Request",
      color: "from-orange-400 to-red-500",
      badge: "Permintaan Salah!",
      suggestion: "Periksa data yang dikirim"
    },
    '401': {
      icon: FaUserSlash,
      title: "Unauthorized",
      color: "from-yellow-400 to-orange-500", 
      badge: "Belum Login!",
      suggestion: "Silakan login terlebih dahulu"
    },
    '403': {
      icon: FaShieldAlt,
      title: "Forbidden",
      color: "from-pink-400 to-rose-500",
      badge: "Akses Ditolak!",
      suggestion: "Hubungi administrator"
    },
    '404': {
      icon: FaLock,
      title: "Not Found",
      color: "from-blue-400 to-indigo-500",
      badge: "Halaman Tersesat!",
      suggestion: "Kembali ke Beranda"
    },
    '500': {
      icon: FaExclamationTriangle,
      title: "Server Error",
      color: "from-red-400 to-rose-500",
      badge: "Server Down!",
      suggestion: "Coba lagi nanti"
    }
  };

  const config = errorConfig[code] || errorConfig['404'];
  const Icon = config.icon;

  const getImage = () => {
    const images = {
      'lost-cat': '🐱',
      'broken-robot': '🤖💥',
      'locked-door': '🚪🔒',
      'sad-cloud': '☁️😢',
      'server-down': '🖥️💥'
    };
    return images[image] || images['lost-cat'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50">
      {/* Page Header */}
      <PageHeader 
        title={`${code} - ${config.title}`}
        breadcrumb={["Home", "Error", code]}
      >
        <div className="flex space-x-2">
          <Link to="/" className="bg-hijau text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-hijau-dark transition">
            <FaHome />
            <span>Beranda</span>
          </Link>
          <Link to="/dashboard" className="bg-biru text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-biru-dark transition">
            <FaSearch />
            <span>Dashboard</span>
          </Link>
        </div>
      </PageHeader>

      {/* Main Error Content */}
      <div className="flex flex-col items-center justify-center px-4 py-16 lg:py-24">
        {/* Error Illustration Card */}
        <div className="bg-white/80 backdrop-blur-xl p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/50 max-w-lg w-full transform hover:scale-[1.02] transition-all duration-300 animate-float">
          
          {/* Animated Emoji Illustration */}
          <div className="text-center mb-8">
            <div className="text-8xl lg:text-9xl mb-6 animate-bounce-slow">
              {getImage()}
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-200 to-orange-200 px-6 py-3 rounded-2xl text-lg font-bold text-yellow-900 border-2 border-yellow-300 shadow-lg">
              <Icon className="w-6 h-6" />
              <span>{config.badge}</span>
            </div>
          </div>

          {/* Error Code */}
          <div className="text-center mb-6">
            <h1 className={`text-7xl lg:text-8xl font-black bg-gradient-to-r ${config.color} bg-clip-text text-transparent tracking-tight drop-shadow-lg`}>
              {code}
            </h1>
          </div>

          {/* Error Title & Description */}
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              {config.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-md mx-auto">
              {description}
            </p>
            <p className="text-lg font-medium text-gray-700 italic">
              "{suggestion}"
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-hijau via-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 text-lg flex-1"
            >
              <FaHome className="w-6 h-6 group-hover:animate-bounce" />
              <span>Kembali ke Beranda</span>
            </Link>
            
            <Link 
              to="/orders" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-biru via-indigo-500 to-purple-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1 text-lg flex-1"
            >
              <FaSearch className="w-6 h-6" />
              <span>Lihat Orders</span>
            </Link>
          </div>

          {/* Quick Tips */}
          <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-100">
              <FaExclamationTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="font-medium text-gray-800">Refresh</div>
              <div className="text-sm text-gray-600">Tekan F5</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
              <FaHome className="w-8 h-8 text-biru mx-auto mb-2" />
              <div className="font-medium text-gray-800">Beranda</div>
              <div className="text-sm text-gray-600">Kembali aman</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
              <FaShieldAlt className="w-8 h-8 text-hijau mx-auto mb-2" />
              <div className="font-medium text-gray-800">Support</div>
              <div className="text-sm text-gray-600">Hubungi admin</div>
            </div>
          </div>
        </div>

        {/* Floating Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-10 w-24 h-24 bg-gradient-to-r from-yellow-200/60 to-orange-200/60 rounded-full blur-xl animate-blob"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-200/60 to-purple-200/60 rounded-full blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 -left-8 w-20 h-20 bg-gradient-to-r from-green-200/50 to-emerald-200/50 rounded-full blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default ErrorPage;