import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Hero() {
  const { blogs: apiBlogs } = useAuth();

  // Sample blogs to show if API is still loading or fails
  const sampleBlogs = [
    {
      _id: "s1",
      title: "Mastering the Art of Modern Web Design",
      category: "Design",
      blogImage: { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" },
      adminName: "Alex Rivera",
      adminPhoto: "https://i.pravatar.cc/150?u=alex"
    },
    {
      _id: "s2",
      title: "The Future of Artificial Intelligence",
      category: "Technology",
      blogImage: { url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" },
      adminName: "Sarah Chen",
      adminPhoto: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      _id: "s3",
      title: "Exploring Hidden Gems in Tropical Islands",
      category: "Travel",
      blogImage: { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop" },
      adminName: "Marco Rossi",
      adminPhoto: "https://i.pravatar.cc/150?u=marco"
    },
    {
      _id: "s4",
      title: "Gourmet Flavors: A Culinary Journey",
      category: "Food",
      blogImage: { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" },
      adminName: "Julai Kim",
      adminPhoto: "https://i.pravatar.cc/150?u=julai"
    }
  ];

  const blogs = (apiBlogs && apiBlogs.length > 0) ? apiBlogs : sampleBlogs;
  console.log("Hero Blogs State:", blogs.length, apiBlogs ? "(API)" : "(Fallback)");
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12 space-y-4 animate-fade-in text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Explore the <span className="text-blue-600">WordWave</span> Universe
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 font-medium">
          Dive into a world of stories, insights, and perspectives from our most talented creators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 4).map((element, index) => {
            return (
              <Link
                to={`/blog/${element._id}`}
                key={element._id}
                className={`group relative glass rounded-3xl overflow-hidden shadow-xl hover:shadow-blue-500/10 transition-all duration-500 animate-fade-up delay-${index + 1}`}
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={element.blogImage.url}
                    alt={element.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  <div className="absolute bottom-6 left-6 right-6 space-y-2">
                    <span className="px-3 py-1 bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {element.category}
                    </span>
                    <h1 className="text-xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">
                      {element.title}
                    </h1>
                  </div>
                </div>

                <div className="p-6 bg-white flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={element.adminPhoto}
                      alt={element.adminName}
                      className="w-10 h-10 rounded-full border-2 border-slate-100 object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-slate-800 leading-none mb-1">
                      {element.adminName}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                      Top Author
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="col-span-full h-96 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 font-medium animate-pulse">Fetching the latest waves...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
