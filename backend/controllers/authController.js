const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const makeToken = (user) =>
  jwt.sign({ id: user.id, fullName: user.full_name, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

exports.signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const [exists] = await pool.query("SELECT id FROM auth_users WHERE email = ?", [email]);
    if (exists.length > 0) return res.status(409).json({ message: "Email already exists" });

    const passwordHash = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      "INSERT INTO auth_users (full_name, email, password_hash) VALUES (?, ?, ?)",
      [fullName, email, passwordHash]
    );

    const [rows] = await pool.query("SELECT id, full_name, email FROM auth_users WHERE id = ?", [
      result.insertId,
    ]);

    const user = rows[0];
    const token = makeToken(user);

    res.json({
      token,
      user: { id: user.id, fullName: user.full_name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "Missing fields" });

    const [rows] = await pool.query(
      "SELECT id, full_name, email, password_hash FROM auth_users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) return res.status(401).json({ message: "Invalid email or password" });

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ message: "Invalid email or password" });

    const token = makeToken(user);

    res.json({
      token,
      user: { id: user.id, fullName: user.full_name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.me = async (req, res) => {
  // req.user comes from middleware
  res.json({ user: req.user });
};
