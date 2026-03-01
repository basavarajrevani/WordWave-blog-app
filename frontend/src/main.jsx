import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { Toaster } from 'react-hot-toast'

console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster />
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
