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

        {/* Protected Routes - Redirect to / if not authenticated */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        <Route path="/blogs" element={isAuthenticated ? <Blogs /> : <Navigate to="/" />} />
        <Route path="/creators" element={isAuthenticated ? <Creators /> : <Navigate to="/" />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Feature Routes */}
        <Route path="/blog/update/:id" element={isAuthenticated ? <UpdateBlog /> : <Navigate to="/" />} />
        <Route path="/blog/:id" element={isAuthenticated ? <Detail /> : <Navigate to="/" />} />

        {/* 404 Not Found route */}
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;



