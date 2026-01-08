import "./App.css";
import Navbar from "./pages/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contacts from "./pages/contacts";
import About from "./pages/about";
import { MainContext } from "./utils/context";
import { useState } from "react";
import Features from "./pages/features";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./auth.css";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/pages/Dashboard";
import AdminAuthUsers from "./admin/pages/AuthUsers";
import AdminContactUsers from "./admin/pages/ContactUsers";
import AdminCalls from "./admin/pages/Calls";




function App() {
  const [lastCalledUser, setLastCalledUser] = useState(undefined);
  const storeLastCalledUser = (user) => setLastCalledUser(user);

  return (
    <MainContext.Provider value={{ lastCalledUser, storeLastCalledUser }}>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="auth-users" element={<AdminAuthUsers />} />
        <Route path="contact-users" element={<AdminContactUsers />} />
        <Route path="calls" element={<AdminCalls />} />
      </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
