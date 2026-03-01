import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Register() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  const changePhotoHandler = (e) => {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setPhoto(file);
    };
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("education", education);
    formData.append("photo", photo);
    try {
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const API_BASE_URL = isLocal ? "http://localhost:4005/api" : (import.meta.env.VITE_API_BASE_URL || "");
      const REGISTER_URL = `${API_BASE_URL}/users/register`;
      const { data } = await axios.post(
        REGISTER_URL,
        // "http://localhost:4005/api/users/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      localStorage.setItem("jwt", data.token); // storing token in localStorage so that if user refreshed the page it will not redirect again in login
      toast.success(data.message || "User registered successfully");
      setProfile(data);
      setIsAuthenticated(true);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      setEducation("");
      setPhoto("");
      setPhotoPreview("");
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Please fill the required fields"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden py-12">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="w-full max-w-xl px-4 relative z-10 animate-fade-up">
        <div className="glass p-8 md:p-10 rounded-3xl shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <div className="flex justify-center items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transform -rotate-12">
                <span className="text-white text-xl font-bold">W</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                WordWave <span className="text-blue-600">Blog</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium">Join our community of passionate writers and readers.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Role</label>
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
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                />
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
                <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                <input
                  type="number"
                  placeholder="1234567890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Education</label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="input-field"
                >
                  <option value="">Select Your Education</option>
                  <option value='Schooling'>Schooling</option>
                  <option value='Diploma'>Diploma</option>
                  <option value='Engineering'>Engineering</option>
                  <option value='BCA'>BCA</option>
                  <option value='MCA'>MCA</option>
                  <option value='MBA'>MBA</option>
                  <option value='BBA'>BBA</option>
                  <option value='Ph.D. / Doctorate'>Ph.D. / Doctorate</option>
                  <option value='Medicine'>Medicine</option>
                  <option value='Businees'>Businees</option>
                  <option value='Arts'>Arts</option>
                  <option value='Law'>Law</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Profile Picture</label>
              <div className="flex items-center space-x-4 p-4 bg-white/50 border border-dashed border-slate-300 rounded-2xl">
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-200">
                  {photoPreview ? (
                    <img src={photoPreview} alt="preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  onChange={changePhotoHandler}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-2">
              <button type="submit" className="btn-primary w-full shadow-blue-500/20">
                Create Account
              </button>
            </div>

            <p className="text-center text-slate-600 text-sm">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-600 font-bold hover:underline underline-offset-4">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
