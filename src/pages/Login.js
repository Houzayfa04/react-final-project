import "../auth.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/authContext";
export default function Login() {
  const { login } = useContext(AuthContext);
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErr(data.message || "Login failed");
        return;
      }

      login(data.token, data.user);
      nav("/contacts");
    } catch (error) {
      setErr("Failed to connect to server");
    }
  };

  return (
    <div className="auth_container">
  <h2>Login</h2>

  {err && <p className="auth_error">{err}</p>}

  <form onSubmit={onSubmit} className="auth_form">
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

    <button type="submit">Login</button>
  </form>

  <p className="auth_switch">
    Don’t have an account? <Link to="/signup">Signup</Link>
  </p>
</div>

  );
}
