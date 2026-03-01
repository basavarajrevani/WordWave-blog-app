import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Tech() {
  const { blogs } = useAuth();
  const techBlogs = blogs?.filter((blog) => blog.category === "Technology");
  console.log(techBlogs);
  return (
    <div className="bg-slate-900 py-20 my-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl font-black text-white tracking-tight">
            Next-Gen <span className="text-blue-500">Technology</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            Explore the cutting edge of innovation. From AI to Quantum Computing,
            stay ahead of the wave with our curated tech insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {techBlogs && techBlogs.length > 0 ? (
            techBlogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blog?.blogImage?.url}
                    alt={blog?.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                  <div className="flex flex-col space-y-2">
                    <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">
                      {blog?.category}
                    </span>
                    <h2 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">
                      {blog?.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 flex justify-center">
              <p className="text-slate-500 animate-pulse font-bold tracking-widest uppercase">Initializing Tech Stack...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tech;
