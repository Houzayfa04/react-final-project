require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

// ✅ auth routes (make sure these files exist)
const authRoutes = require("./routes/authRoutes");
const auth = require("./middleware/authMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ health
app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Backend is running ✅" });
});

// ✅ DB test
app.get("/api/db-test", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ok: true, message: "MySQL connected ✅" });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "MySQL connection failed ❌",
      error: err.message,
    });
  }
});

// ✅ contacts
app.get("/api/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users ORDER BY id ASC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ AUTH endpoints
app.use("/api/auth", authRoutes);

// ✅ Protected calls endpoint (user must be logged in)
app.post("/api/calls", auth, async (req, res) => {
  // later we can save call logs in DB
  res.json({ ok: true, message: "Call allowed ✅", user: req.user });
});

module.exports = app;
