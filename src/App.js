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


function App() {
  const [lastCalledUser, setLastCalledUser] = useState(undefined);
  const storeLastCalledUser = (user) => setLastCalledUser(user);

  return (
    <MainContext.Provider value={{ lastCalledUser, storeLastCalledUser }}>
      <Navbar />
      <Routes>
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
