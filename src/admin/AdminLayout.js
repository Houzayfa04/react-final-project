import { NavLink, Outlet } from "react-router-dom";
import "./admin.css";

export default function AdminLayout() {
  return (
    <div className="admin_wrap">
      <aside className="admin_sidebar">
        <div className="admin_brand">Admin Panel</div>

        <nav className="admin_nav">
          <NavLink end to="/admin" className={({ isActive }) => isActive ? "admin_link active" : "admin_link"}>
            Dashboard
          </NavLink>

          <NavLink to="/admin/auth-users" className={({ isActive }) => isActive ? "admin_link active" : "admin_link"}>
            Auth Users
          </NavLink>

          <NavLink to="/admin/contact-users" className={({ isActive }) => isActive ? "admin_link active" : "admin_link"}>
            Contact Users
          </NavLink>

          <NavLink to="/admin/calls" className={({ isActive }) => isActive ? "admin_link active" : "admin_link"}>
            Calls
          </NavLink>
        </nav>
      </aside>

      <main className="admin_main">
        <div className="admin_panel">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
