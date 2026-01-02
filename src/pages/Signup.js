import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/authContext";
import "../auth.css";

export default function Signup() {
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErr(data.message || "Signup failed");
        return;
      }

      login(data.token, data.user);
      nav("/contacts");
    } catch (error) {
      console.log("SIGNUP ERROR:", error);
      setErr("Failed to connect to server");
    }
  };

  return (
<div className="auth_container">
  <h2>Signup</h2>

  {err && <p className="auth_error">{err}</p>}

  <form onSubmit={onSubmit} className="auth_form">
    <input
      placeholder="Full Name"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
    />

    <input
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      placeholder="Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button type="submit">Create Account</button>
  </form>

  <p className="auth_switch">
    Already have an account? <Link to="/login">Login</Link>
  </p>
</div>

  );
}
