import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../utils/authContext";

function Navbar() {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar_left">
        <div className="navbar_logo">ContactHub</div>

        <div className="navbar_links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav_link nav_link-active" : "nav_link"
            }
          >
            Home
          </NavLink>

              <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? "nav_link nav_link-active" : "nav_link"
              }
            >
              Admin
            </NavLink>


          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? "nav_link nav_link-active" : "nav_link"
            }
          >
            Contacts
          </NavLink>

          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive ? "nav_link nav_link-active" : "nav_link"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav_link nav_link-active" : "nav_link"
            }
          >
            About
          </NavLink>
        </div>
      </div>

      {/* CENTER (greeting perfectly centered) */}
      <div className="navbar_center">
        {isLoggedIn && (
          <span className="navbar_greeting">
            Hello {user?.full_name || user?.fullName || user?.name || ""}
          </span>
        )}
      </div>

      {/* RIGHT */}
      <div className="navbar_right">
        {!isLoggedIn ? (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav_link nav_link-active" : "nav_link"
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "nav_link nav_link-active" : "nav_link"
              }
            >
              Register
            </NavLink>
          </>
        ) : (
          <button className="navbar_logout" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
