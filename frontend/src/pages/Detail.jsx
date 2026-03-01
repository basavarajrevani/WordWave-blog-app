import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const SINGLE_BLOG_URL = `${API_BASE_URL}/blogs/single-blog/${id}`;

        const { data } = await axios.get(
          SINGLE_BLOG_URL,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (data) {
          setBlog(data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast.error("Failed to load blog.");
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      <section className="container mx-auto px-6 max-w-4xl">
        <div className="animate-fade-up space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-blue-500/20">
              {blog?.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              {blog?.title}
            </h1>

            <div className="flex items-center space-x-4 pt-4">
              <div className="relative">
                <img
                  src={blog?.adminPhoto}
                  alt={blog?.adminName}
                  className="w-14 h-14 rounded-full border-2 border-white shadow-xl object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-bold text-slate-800 leading-none">
                  {blog?.adminName}
                </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Verified Creator
                </p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {blog?.blogImage && (
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={blog?.blogImage?.url}
                alt={blog?.title}
                className="w-full max-h-[600px] object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem]"></div>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <p className="text-slate-600 leading-relaxed text-lg first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left uppercase first-letter:not-italic">
                {blog?.about}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
