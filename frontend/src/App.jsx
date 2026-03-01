import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Creators from './pages/Creators';
import { useAuth } from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Detail from './pages/Detail';
import UpdateBlog from './dashboard/UpdateBlog';
import LandingPage from './pages/LandingPage';
import Notfound from './pages/Notfound';

function App() {
  const location = useLocation();
  const { blogs, isAuthenticated } = useAuth();

  // Custom redirect for authenticated users landing on the splash page
  if (isAuthenticated && location.pathname === "/") {
    return <Navigate to="/home" />;
  }
  const hideNavbarFooter = ['/', '/dashboard', '/login', '/register'].includes(location.pathname) ||
    (!isAuthenticated && ['/blogs', '/creators', '/about', '/contact'].includes(location.pathname));

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Route for updating a blog */}
        <Route path="/blog/update/:id" element={<UpdateBlog />} />

        {/* Single blog detail page */}
        <Route path="/blog/:id" element={<Detail />} />

        {/* 404 Not Found route */}
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;



