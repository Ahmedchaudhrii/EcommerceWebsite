import jwt from "jsonwebtoken";

// Middleware to verify admin token
export const verifyAdmin = (req, res, next) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token using your secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the role is admin
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    // Token is valid and user is admin
    req.admin = decoded; // Optional: attach decoded info to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
