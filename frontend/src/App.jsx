// import React from "react";
// import Navbar from "../src/components/Navbar";
// import Home from "../src/components/Home";
// import Footer from "../src/components/Footer";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import Blogs from "../src/pages/Blogs";
// import About from "../src/pages/About";
// import Contact from "../src/pages/Contact";
// import Login from "../src/pages/Login";
// import Register from "../src/pages/Register";
// import Dashboard from "../src/pages/Dashboard";
// import Creators from "./pages/Creators";
// import { useAuth } from "./context/AuthProvider";
// import { Toaster } from "react-hot-toast";
// import UpdateBlog from "./dashboard/UpdateBlog";
// import Detail from "./pages/Detail";
// import NotFound from "./pages/NotFound";
// function App() {
//   const location = useLocation();
//   const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(
//     location.pathname
//   );
//   const { blogs, isAuthenticated } = useAuth();
//   let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage to maininting the routes protect (Go to login.jsx)
//   console.log(blogs);
//   console.log(isAuthenticated); // it is not using because every page refresh it was redirected to /login

//   return (
//     <div>
//       {!hideNavbarFooter && <Navbar />}
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={token ? <Home /> : <Navigate to={"/login"} />}
//         />
//         <Route exact path="/blogs" element={<Blogs />} />
//         <Route exact path="/about" element={<About />} />
//         <Route exact path="/contact" element={<Contact />} />
//         <Route exact path="/creators" element={<Creators />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/register" element={<Register />} />
//         <Route exact path="/dashboard" element={<Dashboard />} />

//         {/* Single page route */}
//         <Route exact path="/blog/:id" element={<Detail />} />

//         {/* Update page route */}
//         <Route exact path="/blog/update/:id" element={<UpdateBlog />} />

//         {/* Universal route */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Toaster />
//       {!hideNavbarFooter && <Footer />}
//     </div>
//   );
// }

// export default App;



















import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import Blogs from '../src/pages/Blogs';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Dashboard from '../src/pages/Dashboard';
import Creators from '../src/pages/Creators';
import { useAuth } from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Detail from './pages/Detail';
import UpdateBlog from './dashboard/UpdateBlog';
import Notfound from './pages/Notfound';

function App() {
  const location = useLocation();
  const hideNavbarFooter = ['/dashboard', '/login', '/register'].includes(location.pathname);
  const { blogs, isAuthenticated } = useAuth();

  console.log(blogs);
  console.log(isAuthenticated);

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
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



