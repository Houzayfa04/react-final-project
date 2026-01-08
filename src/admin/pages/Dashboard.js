import { load } from "../utils/storage";
import { mockAuthUsers } from "../data/mockAuthUsers";

export default function Dashboard() {
  const authUsers = load("admin_auth_users", mockAuthUsers);
  const contacts = load("admin_contacts", []);
  const calls = load("admin_calls_count", 0);

  const totalUsers = authUsers.length + contacts.length;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Overview of users and calls.</p>

      <div className="dash_grid">
        <div className="dash_card dash_orange">
          <div className="dash_top">
            <span className="dash_icon">👤</span>
            <span className="dash_label">Auth Users</span>
          </div>
          <div className="dash_value">{authUsers.length}</div>
        </div>

        <div className="dash_card dash_green">
          <div className="dash_top">
            <span className="dash_icon">📇</span>
            <span className="dash_label">Contact Users</span>
          </div>
          <div className="dash_value">{contacts.length}</div>
        </div>

        <div className="dash_card dash_purple">
          <div className="dash_top">
            <span className="dash_icon">📞</span>
            <span className="dash_label">Total Calls</span>
          </div>
          <div className="dash_value">{calls}</div>
        </div>

        <div className="dash_card dash_blue">
          <div className="dash_top">
            <span className="dash_icon">📊</span>
            <span className="dash_label">Total Users</span>
          </div>
          <div className="dash_value">{totalUsers}</div>
        </div>
      </div>
    </div>
  );
}
