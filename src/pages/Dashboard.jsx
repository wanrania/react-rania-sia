import { useState } from "react";
import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
  FaTimesCircle,
  FaMoneyBillWave,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title="Dashboard"
        breadcrumb={["Home"]}
      >
        <div className="flex space-x-2">
          <button className="bg-hijau text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-hijau-dark transition">
            <FaDollarSign />
            <span>New Order</span>
          </button>
          <button className="bg-biru text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-biru-dark transition">
            <FaTruck />
            <span>Track</span>
          </button>
        </div>
      </PageHeader>

      {/* Cards */}
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Orders */}
        <div
          onClick={() => {
            setModalData("Total Orders: 75\n📈 +12% from last month");
            setIsOpen(true);
          }}
          className="flex items-center space-x-5 bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 border border-gray-100 hover:border-hijau/50"
        >
          <div className="bg-hijau rounded-2xl p-4 shadow-lg">
            <FaShoppingCart className="text-2xl text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-900">75</span>
            <span className="text-gray-500 font-medium">Total Orders</span>
            <span className="text-xs text-green-600 font-semibold flex items-center">
              +12% <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </span>
          </div>
        </div>

        {/* Delivered */}
        <div
          onClick={() => {
            setModalData("Total Delivered: 175\n✅ 98% delivery rate");
            setIsOpen(true);
          }}
          className="flex items-center space-x-5 bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 border border-gray-100 hover:border-biru/50"
        >
          <div className="bg-biru rounded-2xl p-4 shadow-lg">
            <FaTruck className="text-2xl text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-900">175</span>
            <span className="text-gray-500 font-medium">Total Delivered</span>
            <span className="text-xs text-blue-600 font-semibold">98%</span>
          </div>
        </div>

        {/* Canceled */}
        <div
          onClick={() => {
            setModalData("Total Canceled: 40\n⚠️ Review cancellation reasons");
            setIsOpen(true);
          }}
          className="flex items-center space-x-5 bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 border border-gray-100 hover:border-merah/50"
        >
          <div className="bg-merah rounded-2xl p-4 shadow-lg">
            <FaBan className="text-2xl text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-900">40</span>
            <span className="text-gray-500 font-medium">Total Canceled</span>
            <span className="text-xs text-red-600 font-semibold">-3%</span>
          </div>
        </div>

        {/* Revenue */}
        <div
          onClick={() => {
            setModalData("Total Revenue: Rp 128.450.000\n💰 Monthly target: 85% achieved");
            setIsOpen(true);
          }}
          className="flex items-center space-x-5 bg-gradient-to-br from-kuning to-orange-400 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-200 text-white"
        >
          <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
            <FaDollarSign className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">Rp 128M</span>
            <span className="font-medium">Total Revenue</span>
            <span className="text-xs font-semibold flex items-center mt-1">
              85% <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-5">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-hijau rounded-full animate-pulse"></div>
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            <button className="text-sm text-biru font-medium hover:text-biru-dark transition flex items-center space-x-1">
              View All 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Activity List */}
          <div className="divide-y divide-gray-100">
            {/* Orders */}
            <div className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 group-hover:bg-green-200 p-3 rounded-xl transition-colors">
                  <FaShoppingCart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-800">Order baru dari Rina</p>
                  <span className="text-xs text-gray-500">Order #1234 • Rp 250.000</span>
                </div>
              </div>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full font-medium">2 menit</span>
            </div>

            {/* Delivered */}
            <div className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 group-hover:bg-blue-200 p-3 rounded-xl transition-colors">
                  <FaTruck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-800">Paket dikirim</p>
                  <span className="text-xs text-gray-500">Ke Bandung • JNE</span>
                </div>
              </div>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full font-medium">10 menit</span>
            </div>

            {/* Canceled */}
            <div className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 group-hover:bg-red-200 p-3 rounded-xl transition-colors">
                  <FaTimesCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-800">Order dibatalkan</p>
                  <span className="text-xs text-gray-500">Order #5678 • Customer request</span>
                </div>
              </div>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full font-medium">30 menit</span>
            </div>

            {/* Payment */}
            <div className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 group-hover:bg-yellow-200 p-3 rounded-xl transition-colors">
                  <FaMoneyBillWave className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-800">Pembayaran diterima</p>
                  <span className="text-xs text-gray-500">Rp 250.000 • Gopay</span>
                </div>
              </div>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full font-medium">1 jam</span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL KEREN - Enhanced */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/50 transform scale-95 animate-in zoom-in-95 duration-200"
          >
            {/* Icon Header */}
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-hijau to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <FaDollarSign className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Detail Statistik</h2>

            {/* Content */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <pre className="text-sm whitespace-pre-wrap text-gray-800 font-mono">{modalData}</pre>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Tutup
              </button>
              <button className="flex-1 bg-gradient-to-r from-hijau to-emerald-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-hijau-dark hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}