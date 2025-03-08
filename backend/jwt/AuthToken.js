import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

// const createTokenAndSaveCookies = async (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
//     expiresIn: "30d",
//   });
//   res.cookie("jwt", token, {
//     httpOnly: true, // Temporarily set to false for testing
//     secure: false,
//     sameSite: "lax",
//     path: "/", // Ensure the cookie is available throughout the site
//   });
//   await User.findByIdAndUpdate(userId, { token });
//   return token;
// };

// export default createTokenAndSaveCookies;


const createTokenAndSaveCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true, // Only send over HTTPS
    sameSite: "None", // Crucial for cross-origin requests
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    domain: 'wordwave-blog-app-backend.onrender.com'
  });

  return token;
};

export default createTokenAndSaveCookies;
