import { MdDashboard } from "react-icons/md";
import {
  FaList,
  FaHeadphones,
  FaBoxOpen,
  FaPuzzlePiece,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ErrorMenuItems } from "./SidebarMenu";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center rounded-xl p-4 transition-all duration-200
    ${
      isActive
        ? "bg-green-200 text-hijau font-bold"
        : "text-gray-600 hover:bg-green-100 hover:text-hijau"
    }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-80 flex-col bg-white p-8 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo">
        <h1 className="text-5xl font-poppins font-semibold text-gray-900">
          Sedap
          <span className="text-hijau">.</span>
        </h1>

        <p className="mt-1 text-gray-400 font-semibold">
          Modern Admin Dashboard
        </p>
      </div>

      {/* Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul className="space-y-3">
          <li>
            <NavLink to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders" className={menuClass}>
              <FaList className="mr-4 text-xl" />
              <span>Orders</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/customers" className={menuClass}>
              <FaHeadphones className="mr-4 text-xl" />
              <span>Customers</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className={menuClass}>
              <FaBoxOpen className="mr-4 text-xl" />
              <span>Products</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/components" className={menuClass}>
              <FaPuzzlePiece className="mr-4 text-xl" />
              <span>Components</span>
            </NavLink>
          </li>

          {/* Divider */}
          <li className="py-4">
            <div className="h-px w-full bg-gray-200"></div>
          </li>

          {/* Error Testing */}
          <ErrorMenuItems />
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        {/* Card */}
        <div className="mb-8 rounded-2xl bg-hijau p-5 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-white">
                Organize your menus through button below!
              </p>

              <button className="mt-4 w-full rounded-lg bg-white py-2 font-semibold text-gray-700 transition hover:bg-gray-100">
                Add Menus
              </button>
            </div>

            <img
              className="w-20 rounded-full border-4 border-white"
              src="https://randomuser.me/api/portraits/women/50.jpg"
              alt="Profile"
            />
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-gray-400">
          <h3 className="font-bold">Sedap Restaurant Admin Dashboard</h3>

          <p className="text-sm mt-1">© 2025 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
