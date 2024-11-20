import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const AdminLayout: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <AdminSidebar />
    <div style={{ flex: 1 }}>
      <AdminNavbar />
      <div style={{ padding: '20px' }}>
        <Outlet /> {/* Render admin-specific pages */}
      </div>
    </div>
  </div>
);

export default AdminLayout;
