import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4">
      {/* Search Bar */}
      <div className="relative w-full max-w-lg">
        <input
          onClick={() => setIsSearchOpen(true)}
          className="border border-gray-100 p-2 pr-10 bg-white w-full rounded-md outline-none cursor-pointer"
          type="text"
          placeholder="Search Here..."
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Icons */}
        <div className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
          <FaBell />
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">
            50
          </span>
        </div>

        <div className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
          <FcAreaChart />
        </div>

        <div className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
          <SlSettings />
        </div>

        <div className="w-px h-8 bg-gray-200"></div>
        {/* Profile */}
        <div className="relative group cursor-pointer">
          <div className="flex items-center space-x-3 bg-white px-3 py-2 rounded-xl shadow-sm hover:shadow-md transition">
            {/* Avatar */}
            <img
              src="https://thumbs.dreamstime.com/b/cute-brown-cavoodle-pink-heart-sunglasses-fluffy-bed-whimsical-hand-drawn-doodle-preppy-coquette-girly-style-435748785.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-blue-400"
            />

            {/* Name & Role */}
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-sm font-semibold">Rania</span>
              <span className="text-xs text-gray-400">Admin</span>
            </div>
          </div>

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none group-hover:pointer-events-auto">
            <ul className="text-sm text-gray-600">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* SEARCH MODAL */}
      {isSearchOpen && (
        <div
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-xl p-5 rounded-2xl shadow-xl"
          >
            <h2 className="text-lg font-bold mb-3">Search</h2>

            <div className="relative">
              <input
                autoFocus
                type="text"
                placeholder="Type something..."
                className="w-full border p-3 rounded-lg outline-none"
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Example Result */}
            <div className="mt-4 text-sm text-gray-500">
              <p>🔍 Recent Search:</p>
              <ul className="mt-2 space-y-1">
                <li className="hover:text-black cursor-pointer">Order #1234</li>
                <li className="hover:text-black cursor-pointer">User Rania</li>
                <li className="hover:text-black cursor-pointer">Revenue</li>
              </ul>
            </div>

            <button
              onClick={() => setIsSearchOpen(false)}
              className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
