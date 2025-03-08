import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [blogs, setblogs] = useState({});
  console.log(blogs);
  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const API_BASE_URL = process.env.VITE_API_BASE_URL;
      const SINGLE_BLOG_URL = `${API_BASE_URL}/blogs/single-blog/${id}`;
        const { data } = await axios.get(
          SINGLE_BLOG_URL,
          // `http://localhost:4005/api/blogs/single-blog/${id}`,

          {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
          }
        );
        if (data) { // Check if data exists
          console.log("API Response Data:", data);
          setBlog(data);
        } else {
          console.warn("API request successful, but data is empty");
          toast.error("Failed to load blog data.");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast.error("Failed to load blog. Please try again.");
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) { // Check if blog is null
    return <p>Loading...</p>; // Or a better loading indicator
  }
  return (
    <div>
      <div>
        {blogs && (
          <section className="container mx-auto p-4">
            <div className="text-blue-500 uppercase text-xs font-bold mb-4">
              {blogs?.category}
            </div>
            <h1 className="text-4xl font-bold mb-6">{blogs?.title}</h1>
            <div className="flex items-center mb-6">
              <img
                src={blogs?.adminPhoto}
                alt="author_avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <p className="text-lg font-semibold">{blogs?.adminName}</p>
            </div>

            <div className="flex flex-col md:flex-row">
              {blogs?.blogImage && (
                <img
                  src={blogs?.blogImage?.url}
                  alt="mainblogsImg"
                  className="md:w-1/2 w-full h-[500px] mb-6 rounded-lg shadow-lg cursor-pointer border"
                />
              )}
              <div className="md:w-1/2 w-full md:pl-6">
                <p className="text-lg mb-6">{blogs?.about}</p>
                {/* Add more content here if needed */}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Detail;
