import axios from "axios";
import React, { useEffect, useState } from "react";

function Creator() {
  const [admin, setAdmin] = useState([]);
  console.log(admin);
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const ADMINS_URL = `${API_BASE_URL}/users/admins`;
        const { data } = await axios.get(
          ADMINS_URL,
          // "http://localhost:4005/api/users/admins",
          {
            withCredentials: true,
          }
        );
        console.log(data.admins);
        setAdmin(data.admins);
      }
      catch (error) {
        console.log("Error fetching admins:", error);
      }
    };
    fetchAdmins();
  }, []);
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col items-center mb-12 space-y-2 animate-fade-in text-center">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Meet the <span className="text-blue-600">Visionaries</span>
        </h1>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        <p className="text-slate-500 font-medium pt-4 max-w-xl">
          The brilliant minds behind WordWave's most compelling stories and insights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {admin && admin.length > 0 ? (
          admin.slice(0, 4).map((element) => {
            return (
              <div
                key={element._id}
                className="group relative flex flex-col items-center animate-fade-up"
              >
                <div className="relative mb-6">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  {/* Profile Border Animation */}
                  <div className="absolute inset-[-4px] bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src={element.photo.url}
                      alt={element.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                    {element.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {element.role}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-12 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Creator;
