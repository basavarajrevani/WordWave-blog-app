import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import toast from "react-hot-toast";
import DefaultProfileImage from "../userdp.jpg"; // Import the default image

function Sidebar({ setComponent }) {
  const { profile, setIsAuthenticated } = useAuth();
  // console.log(profile?.user);
  const navigateTo = useNavigate();

  const [show, setShow] = useState(false);

  const handleComponents = (value) => {
    setComponent(value);
  };
  const gotoHome = () => {
    navigateTo("/");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = process.env.VITE_API_BASE_URL;  // NEW ADD
      const LOGOUT_URL = `${API_BASE_URL}/users/logout`;  // NEW ADD
      const { data } = await axios.get(
        LOGOUT_URL,
        // "http://localhost:4005/api/users/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      localStorage.removeItem("jwt"); // deleting token in localStorage so that if user logged out it will goes to login page
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.data.message || "Failed to logout");
    }
  };

  const profileImageUrl = profile?.user?.photo?.url || DefaultProfileImage;

  return (
    <>
      <div
        className="sm:hidden fixed top-4 left-4 z-50"
        onClick={() => setShow(!show)}
      >
        <CiMenuBurger className="text-2xl" />
      </div>
      <div
        className={`w-64 h-full shadow-lg fixed top-0 left-0 bg-gray-50 transition-transform duration-300 transform sm:translate-x-0 ${
          show ? "translate-x-0" : "-translate-x-full"
        } z-40`} // Added z-40
      >
        <div
          className="sm:hidden absolute top-4 right-4 text-xl cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <BiSolidLeftArrowAlt className="text-2xl" />
        </div>
        <div className="text-center">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-2"
            src={profileImageUrl}
            alt="Profile"
          />
          <p className="text-lg font-semibold">{profile?.user?.name}</p>
        </div>
        <ul className="space-y-4 mx-4">
          <button
            onClick={() => handleComponents("My Blogs")}
            className="w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-md hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg transition duration-300 ease-in-out"
          >
            MY BLOGS
          </button>
          <button
            onClick={() => handleComponents("Create Blog")}
            className="w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl shadow-md hover:from-teal-600 hover:to-cyan-700 hover:shadow-lg transition duration-300 ease-in-out"
          >
            CREATE BLOG
          </button>
          <button
            onClick={() => handleComponents("My Profile")}
            className="w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl shadow-md hover:from-pink-600 hover:to-rose-700 hover:shadow-lg transition duration-300 ease-in-out"
          >
            MY PROFILE
          </button>
          <button
            onClick={gotoHome}
            className="w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-sky-600 rounded-xl shadow-md hover:from-blue-600 hover:to-sky-700 hover:shadow-lg transition duration-300 ease-in-out"
          >
            HOME
          </button>
          <button
            onClick={handleLogout}
            className="w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl shadow-md hover:from-gray-800 hover:to-black hover:shadow-lg transition duration-300 ease-in-out"
          >
            LOGOUT
          </button>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
