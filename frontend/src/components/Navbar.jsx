import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  console.log(profile?.user);
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const LOGOUT_URL = `${API_BASE_URL}/users/logout`;
      const { data } = await axios.get(
        LOGOUT_URL,
        { withCredentials: true }
      );
      console.log(data);
      localStorage.removeItem("jwt"); // deleting token in localStorage so that if user logged out it will goes to login page
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b border-slate-200/50">
        <div className="flex items-center justify-between container mx-auto px-6 h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-500/20">
              <span className="text-white text-xl font-bold">W</span>
            </div>
            <div className="font-black text-2xl tracking-tighter text-slate-800">
              WordWave<span className="text-blue-600">Blog</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {["HOME", "BLOGS", "CREATORS", "ABOUT", "CONTACT"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                    className="text-xs font-black tracking-widest text-slate-500 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>

            <div className="flex items-center space-x-4">
              {isAuthenticated && profile?.user?.role === "admin" && (
                <Link
                  to="/dashboard"
                  className="px-5 py-2.5 bg-slate-900 text-white text-xs font-black tracking-widest rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/10"
                >
                  DASHBOARD
                </Link>
              )}

              {!isAuthenticated ? (
                <Link
                  to="/login"
                  className="px-5 py-2.5 bg-blue-600 text-white text-xs font-black tracking-widest rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/20"
                >
                  SIGN IN
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-5 py-2.5 bg-red-50 text-red-600 text-xs font-black tracking-widest rounded-xl hover:bg-red-100 transition-all duration-300"
                >
                  LOGOUT
                </button>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setShow(!show)}
          >
            {show ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 glass border-b border-slate-200 overflow-hidden transition-all duration-500 ease-in-out ${show ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="container mx-auto px-6 py-8 flex flex-col space-y-6">
            {["HOME", "BLOGS", "CREATORS", "ABOUT", "CONTACT"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setShow(false)}
                  className="text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-4">
              {isAuthenticated && profile?.user?.role === "admin" && (
                <Link
                  to="/dashboard"
                  onClick={() => setShow(false)}
                  className="w-full py-4 bg-slate-900 text-white text-center font-bold rounded-2xl"
                >
                  DASHBOARD
                </Link>
              )}
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  onClick={() => setShow(false)}
                  className="w-full py-4 bg-blue-600 text-white text-center font-bold rounded-2xl"
                >
                  SIGN IN
                </Link>
              ) : (
                <button
                  onClick={(e) => {
                    handleLogout(e);
                    setShow(false);
                  }}
                  className="w-full py-4 bg-red-50 text-red-600 font-bold rounded-2xl"
                >
                  LOGOUT
                </button>
              )}
            </div>
          </ul>
        </div>
      </nav>
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;