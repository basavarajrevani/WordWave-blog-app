import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // FORCE LOCAL FIX: Ignore all env variables if on localhost
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const API_BASE_URL = isLocal ? "http://localhost:4005/api" : (import.meta.env.VITE_API_BASE_URL || "");
      const LOGIN_URL = `${API_BASE_URL}/users/login`;

      console.log("CRITICAL DEBUG: Targeting ->", LOGIN_URL);

      const { data } = await axios.post(
        LOGIN_URL,
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data) {
        console.log(data);
        if (data.token) {
          localStorage.setItem("jwt", data.token);
        }
        toast.success(data.message || "User Logined successfully", {
          duration: 3000,
        });
        setProfile(data.user);
        setIsAuthenticated(true);
        setEmail("");
        setPassword("");
        setRole("");
        navigateTo("/home");
      }
    } catch (error) {
      console.error("Login Error:", error);
      const errorMessage = error.response?.data?.message || error.message || "Network Error";
      toast.error(errorMessage, {
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="w-full max-w-md px-4 py-8 relative z-10 animate-fade-up">
        <div className="glass p-8 rounded-3xl shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <div className="flex justify-center items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <span className="text-white text-xl font-bold">W</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                WordWave <span className="text-blue-600">Blog</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium">Welcome back! Please login to your account.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Login as</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="input-field"
                >
                  <option value="">Select Role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Sign In
              </button>
            </div>

            <p className="text-center text-slate-600 text-sm">
              New to WordWave?{" "}
              <Link to={"/register"} className="text-blue-600 font-bold hover:underline underline-offset-4">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
