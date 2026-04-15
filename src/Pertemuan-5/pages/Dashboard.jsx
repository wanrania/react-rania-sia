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

      <PageHeader />


      {/* Cards */}

      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Orders */}
        <div
          onClick={() => {
            setModalData("Total Orders: 75");
            setIsOpen(true);
          }}
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl hover:scale-105 transition"
        >
          <div className="bg-hijau rounded-full p-4">
            <FaShoppingCart className="text-3xl text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">75</span>
            <span className="text-gray-400">Total Orders</span>
          </div>
        </div>

        {/* Delivered */}
        <div
          onClick={() => {
            setModalData("Total Delivered: 175");
            setIsOpen(true);
          }}
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl hover:scale-105 transition"
        >
          <div className="bg-biru rounded-full p-4">
            <FaTruck className="text-3xl text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">175</span>
            <span className="text-gray-400">Total Delivered</span>
          </div>
        </div>

        {/* Canceled */}
        <div
          onClick={() => {
            setModalData("Total Canceled: 40");
            setIsOpen(true);
          }}
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl hover:scale-105 transition"
        >
          <div className="bg-merah rounded-full p-4">
            <FaBan className="text-3xl text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">40</span>
            <span className="text-gray-400">Total Canceled</span>
          </div>
        </div>

        {/* Revenue */}
        <div
          onClick={() => {
            setModalData("Total Revenue: Rp.128");
            setIsOpen(true);
          }}
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl hover:scale-105 transition"
        >
          <div className="bg-kuning rounded-full p-4">
            <FaDollarSign className="text-3xl text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Rp.128</span>
            <span className="text-gray-400">Total Revenue</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-5">
        <div className="bg-white rounded-2xl shadow-md p-5">
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-bold">Recent Activity</h2>
            <button className="text-sm text-blue-500 hover:underline">
              View All
            </button>
          </div>

          {/* Activity List */}
          <div className="space-y-4">
            {/* Orders */}
            <div className="flex items-center justify-between hover:bg-gray-50 p-3 rounded-xl transition">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 text-green-600 p-3 rounded-full">
                  <FaShoppingCart />
                </div>
                <div>
                  <p className="text-sm font-medium">Order baru dari Rina</p>
                  <span className="text-xs text-gray-400">Order #1234</span>
                </div>
              </div>
              <span className="text-xs text-gray-400">2 menit lalu</span>
            </div>

            {/* Delivered */}
            <div className="flex items-center justify-between hover:bg-gray-50 p-3 rounded-xl transition">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                  <FaTruck />
                </div>
                <div>
                  <p className="text-sm font-medium">Paket dikirim</p>
                  <span className="text-xs text-gray-400">Ke Bandung</span>
                </div>
              </div>
              <span className="text-xs text-gray-400">10 menit lalu</span>
            </div>

            {/* Canceled */}
            <div className="flex items-center justify-between hover:bg-gray-50 p-3 rounded-xl transition">
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 text-red-600 p-3 rounded-full">
                  <FaTimesCircle />
                </div>
                <div>
                  <p className="text-sm font-medium">Order dibatalkan</p>
                  <span className="text-xs text-gray-400">Order #5678</span>
                </div>
              </div>
              <span className="text-xs text-gray-400">30 menit lalu</span>
            </div>

            {/* Payment */}
            <div className="flex items-center justify-between hover:bg-gray-50 p-3 rounded-xl transition">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
                  <FaMoneyBillWave />
                </div>
                <div>
                  <p className="text-sm font-medium">Pembayaran diterima</p>
                  <span className="text-xs text-gray-400">Rp. 250.000</span>
                </div>
              </div>
              <span className="text-xs text-gray-400">1 jam lalu</span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL KEREN */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl w-80 text-center transform transition duration-300 scale-95 animate-[fadeIn_0.3s_ease-out]"
          >
            {/* Icon */}
            <div className="text-4xl mb-2">📊</div>

            {/* Title */}
            <h2 className="text-lg font-bold mb-2">Detail</h2>

            {/* Content */}
            <p className="text-gray-600 mb-4">{modalData}</p>

            {/* Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
