import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

//Authentication
export const isAuthenticated = async (req, res, next) => {
  try {
    let token = req.cookies.jwt;
    console.log("Middleware : ", token);

    // If no token in cookies, check Authorization header
    if (!token) {
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7); // Remove "Bearer " prefix
      }
    }

    if (!token) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error occuring in Authentication: " + error);
    return res.status(401).json({ error: "User not authenticated" });
  }
};

//Authorization
export const isAdmin = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: `User with given role ${req.user.role} not allowed` });
    }
    next();
  };
};
