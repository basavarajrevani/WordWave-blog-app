import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] relative flex items-center justify-center p-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-up">
        {/* Contact Info Side */}
        <div className="space-y-12 text-left">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 text-blue-500 font-black text-xs uppercase tracking-[0.3em] hover:text-white transition-colors">
              <span>← Back to WordWave</span>
            </Link>
            <h1 className="text-6xl font-black text-white tracking-tighter leading-none">
              Get in <span className="text-blue-500">Touch.</span>
            </h1>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
              Have questions or feedback? Our team is here to help you navigate the WordWave ecosystem.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6 group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                <FaPhone size={24} />
              </div>
              <div>
                <h4 className="text-slate-500 font-black text-xs uppercase tracking-widest">Phone</h4>
                <p className="text-white font-bold text-lg">+91 1234567890</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 group">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xl">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 className="text-slate-500 font-black text-xs uppercase tracking-widest">Email</h4>
                <p className="text-white font-bold text-lg">basavarajrevani15@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 group">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xl">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h4 className="text-slate-500 font-black text-xs uppercase tracking-widest">Location</h4>
                <p className="text-white font-bold text-lg">Tumkur, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-10 bg-white/[0.02] border border-white/10 rounded-[4rem] backdrop-blur-xl shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-3xl"></div>

          <h3 className="text-white text-2xl font-black uppercase tracking-tighter relative z-10">Send a Message</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="space-y-4">
              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  {...register("username", { required: true })}
                />
                {errors.username && <span className="text-[10px] text-red-500 font-black uppercase tracking-widest ml-1">Name is required</span>}
              </div>

              <div className="space-y-1">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-[10px] text-red-500 font-black uppercase tracking-widest ml-1">Email is required</span>}
              </div>

              <div className="space-y-1">
                <textarea
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none"
                  {...register("message", { required: true })}
                />
                {errors.message && <span className="text-[10px] text-red-500 font-black uppercase tracking-widest ml-1">Message is required</span>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-[2rem] transition-all duration-300 shadow-[0_10px_40px_rgba(37,99,235,0.2)] flex items-center justify-center space-x-3 group"
            >
              <span>SEND MESSAGE</span>
              <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

