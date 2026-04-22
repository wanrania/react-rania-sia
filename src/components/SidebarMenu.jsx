import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaExclamationTriangle, 
  FaUserSlash, 
  FaShieldAlt 
} from 'react-icons/fa';

export const ErrorMenuItems = () => {
  return (
    <>
      <div className="px-4 py-2 mb-2">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center">
          🔧 Error Testing
        </span>
      </div>
      
      <li>
        <Link to="/error/400" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-all duration-200 group">
          <FaExclamationTriangle className="w-5 h-5 mr-3 text-orange-500 group-hover:scale-110 transition-transform" />
          <span>Bad Request (400)</span>
          <span className="ml-auto text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-semibold">Test</span>
        </Link>
      </li>

      <li>
        <Link to="/error/401" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg transition-all duration-200 group">
          <FaUserSlash className="w-5 h-5 mr-3 text-yellow-500 group-hover:scale-110 transition-transform" />
          <span>Unauthorized (401)</span>
          <span className="ml-auto text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">Test</span>
        </Link>
      </li>

      <li>
        <Link to="/error/403" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-700 rounded-lg transition-all duration-200 group">
          <FaShieldAlt className="w-5 h-5 mr-3 text-pink-500 group-hover:scale-110 transition-transform" />
          <span>Forbidden (403)</span>
          <span className="ml-auto text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full font-semibold">Test</span>
        </Link>
      </li>

      <li className="my-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </li>
    </>
  );
};