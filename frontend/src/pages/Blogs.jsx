import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useAuth();

  console.log(blogs);
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4 animate-fade-in">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Explore All <span className="text-blue-600">Stories</span>
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed font-medium">
          Every blog holds the power to spark curiosity and inspire change. Dive into
          our collection of insightful posts and fresh perspectives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <Link
              to={`/blog/${blog._id}`}
              key={index}
              className="group relative glass rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-white flex flex-col space-y-3">
                <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest bg-blue-50 w-fit px-3 py-1 rounded-full">
                  {blog?.category}
                </span>
                <h2 className="text-xl font-bold text-slate-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {blog?.title}
                </h2>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-20 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs animate-pulse">Syncing Waves...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
