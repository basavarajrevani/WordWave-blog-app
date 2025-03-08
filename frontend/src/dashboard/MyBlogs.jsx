import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function MyBlogs() {
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const API_BASE_URL = process.env.VITE_API_BASE_URL; // NEW ADD
        const MY_BLOG_URL = `${API_BASE_URL}/blogs/my-blog`; // NEW ADD
        const { data } = await axios.get(
          MY_BLOG_URL,
          // "http://localhost:4005/api/blogs/my-blog",
          { withCredentials: true }
        );
        console.log(data);
        setMyBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyBlogs();
  }, []);

const handleDelete = async (id) => {
    try {
      const API_BASE_URL = process.env.VITE_API_BASE_URL;   // NEW ADD
      const DELETE_BLOG_URL = `${API_BASE_URL}/blogs/delete/${id}`;  // NEW ADD
      const res = await axios.delete(DELETE_BLOG_URL, {
        withCredentials: true,
      });
      toast.success(res.data.message || "Blog deleted successfully");
      setMyBlogs((value) => value.filter((blog) => blog._id !== id));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete blog");
    }
  };
  return (
    <div>
      <div className="container mx-auto my-12 p-4">
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ml-20 md:ml-32 lg:ml-40" >
          {myBlogs && myBlogs.length > 0 ? (
            myBlogs.map((element) => (
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                key={element._id}
              >
                {element?.blogImage && (
                  <img
                    src={element?.blogImage.url}
                    alt="blogImg"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <span className="text-sm text-gray-600">
                    {element.category}
                  </span>
                  <h4 className="text-xl font-semibold my-2">
                    {element.title}
                  </h4>
                  <div className="flex justify-between mt-4">
                    <Link
                      to={`/blog/update/${element._id}`}
                      className="text-blue-500 bg-white rounded-md shadow-lg px-3 py-1 border border-gray-400 hover:underline"
                    >
                      UPDATE
                    </Link>
                    <button
                      onClick={() => handleDelete(element._id)}
                      className="text-red-500 bg-white rounded-md shadow-lg px-3 py-1 border border-gray-400 hover:underline"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              You have not posted any blog to see!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyBlogs;













