const jwt = require("jsonwebtoken");

module.exports = function authMiddleware(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, fullName: decoded.fullName, email: decoded.email };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
