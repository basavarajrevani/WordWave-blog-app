import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Trending() {
  const { blogs: apiBlogs } = useAuth();
  const blogs = (apiBlogs && apiBlogs.length > 0) ? apiBlogs.slice(0, 6) : [];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Trending <span className="text-blue-600">Now</span>
        </h1>
        <div className="h-[2px] flex-grow mx-8 bg-slate-100 rounded-full"></div>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="px-3"
      >
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 6).map((element) => {
            return (
              <div
                key={element._id}
                className="group glass rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Link to={`/blog/${element._id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={element.blogImage.url}
                      alt="blog"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {element.category}
                    </div>
                  </div>
                  <div className="p-6 bg-white space-y-4">
                    <h1
                      className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors"
                    >
                      {element.title}
                    </h1>
                    <div className="flex items-center space-x-3 pt-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                        <img
                          src={element.adminPhoto}
                          alt="author"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs font-semibold text-slate-500">
                        {element.adminName}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="flex h-64 items-center justify-center">
            <p className="text-slate-400 animate-pulse">Gathering trends...</p>
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default Trending;
