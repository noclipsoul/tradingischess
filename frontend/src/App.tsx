import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Main/Home/Home';
import About from './components/pages/Main/About/About';
import Contact from './components/pages/Main/Contact/Contact';
import Dashboard from './components/pages/admin/Dashboard/Dashboard';
import Users from './components/pages/admin/Users/Users';
import AddUser from './components/pages/admin/Users/AddUser';
import UpdateUser from './components/pages/admin/Users/UpdateUser';
import Settings from './components/pages/admin/Settings/Settings';
import AdminLayout from './components/admin/AdminLayout';
import PublicLayout from './components/Main/PublicLayout';
const App: React.FC = () => (
  <Router>
    <Routes>
      {/* Public Site */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Admin Dashboard */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="AddUser" element={<AddUser />} />
        <Route path="UpdateUser/:id" element={<UpdateUser />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </Router>
);

export default App;