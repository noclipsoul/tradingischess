import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';
import PublicFooter from './PublicFooter';

const PublicLayout: React.FC = () => (
  <div>
    <PublicNavbar />
    <div style={{ minHeight: '80vh' }}>
      <Outlet /> {/* Render public-specific pages */}
    </div>
    <PublicFooter />
  </div>
);

export default PublicLayout;
