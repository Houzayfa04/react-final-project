import { Link } from "react-router-dom";
import { MainContext } from "../utils/context";
import { useContext } from "react";

function Home() {
  const { lastCalledUser } = useContext(MainContext);

  return (
    <div className="home_container">
      <div className="home_content">

        <div className="home_header">
          <p className="home_badge">📞 React Contacts </p>
          <h1>Welcome to your contact hub</h1>
          <p className="home_subtitle">
            Manage your contacts, simulate calls, and always remember who you called last.
          </p>
        </div>

        {lastCalledUser && (
          <div className="home_last_call">
            <p>Last Called User</p>
            <span>{lastCalledUser}</span>
          </div>
        )}

        <div className="home_stats">
          <div className="home_stat_card">
            <span className="home_stat_icon">👥</span>
            <h3>Browse Contacts</h3>
            <p>View a list of users with their details in a clean, responsive layout.</p>
          </div>

          <div className="home_stat_card">
            <span className="home_stat_icon">📲</span>
            <h3>Simulate Calls</h3>
            <p>Use the call button to trigger a loader and mimic a real phone call.</p>
          </div>

          <div className="home_stat_card">
            <span className="home_stat_icon">⭐</span>
            <h3>Smart Memory</h3>
            <p>React Context remembers the last person you called across pages.</p>
          </div>
        </div>

      
        <div className="home_actions">
          <Link to="/contacts" className="home_btn home_btn_primary">
            View Contacts
          </Link>
          <Link to="/about" className="home_btn home_btn_secondary">
            About this Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
