import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Orders from './pages/Orders';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content area */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Navbar at the top */}
          <Navbar />

          {/* Page content with padding */}
          <Box sx={{ p: 2 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
