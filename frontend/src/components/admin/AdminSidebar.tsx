import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar: React.FC = () => (
  <div className="w-64 h-screen bg-gray-800 text-white">
    <ul className="space-y-4 p-4">
      <li><Link to="/admin" className="hover:text-blue-400">Dashboard</Link></li>
      <li><Link to="/admin/users" className="hover:text-blue-400">Users</Link></li>
      <li><Link to="/admin/products" className="hover:text-blue-400">products</Link></li>
      <li><Link to="/admin/Formcomp" className="hover:text-blue-400">Formcomponent</Link></li>
      <li><Link to="/admin/PForm" className="hover:text-blue-400">PForm</Link></li>
      <li><Link to="/admin/settings" className="hover:text-blue-400">Settings</Link></li>

    </ul>
  </div>
);

export default AdminSidebar;
