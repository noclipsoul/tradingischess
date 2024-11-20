import React from 'react';
import { Link } from 'react-router-dom';

const PublicNavbar: React.FC = () => (
  <nav className="bg-gray-800 text-white shadow-md">
    <div className="container mx-auto flex justify-between items-center px-4 py-3">
      {/* Logo */}
      <div>
        <Link to="/" className="text-2xl font-bold hover:text-blue-400">
          TradingisChess
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default PublicNavbar;
