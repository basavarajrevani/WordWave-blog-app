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
        const API_BASE_URL = process.env.VITE_API_BASE_URL;
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

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <section className="container mx-auto p-4">
        <div className="text-blue-500 uppercase text-xs font-bold mb-4">
          {blog?.category}
        </div>
        <h1 className="text-4xl font-bold mb-6">{blog?.title}</h1>
        <div className="flex items-center mb-6">
          <img
            src={blog?.adminPhoto}
            alt="author_avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
          <p className="text-lg font-semibold">{blog?.adminName}</p>
        </div>

        <div className="flex flex-col md:flex-row">
          {blog?.blogImage && (
            <img
              src={blog?.blogImage?.url}
              alt="mainblogsImg"
              className="md:w-1/2 w-full h-[500px] mb-6 rounded-lg shadow-lg cursor-pointer border"
            />
          )}
          <div className="md:w-1/2 w-full md:pl-6">
            <p className="text-lg mb-6">{blog?.about}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
