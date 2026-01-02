import "./userCard.css";
import { useState, useContext } from "react";
import { Audio } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../utils/context";
import { AuthContext } from "../../utils/authContext";

function UserCard({ id, name, email, address, phone, latitude, longitude }) {
  const fullAddress = address || "No address";
  const lat = latitude || "N/A";
  const lng = longitude || "N/A";

  const [isToggled, setIsToggeled] = useState(false);

  const { lastCalledUser, storeLastCalledUser } = useContext(MainContext);
  const { isLoggedIn, token } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleTogglingCall() {
    // ✅ block call if not logged in
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    setIsToggeled(true);
    storeLastCalledUser(name);

    // ✅ optional: save call in backend (secured)
    try {
      await fetch("/api/calls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId: id }),
      });
    } catch (e) {
      // if backend fails, we still keep UI working
      console.log("Call log failed:", e);
    }
  }

  function handleTogglingEndCall() {
    setIsToggeled(false);
  }

  return (
    <div className="card_container">
      <div className="card_header">
        <h2>{name}</h2>
        <h4>{email}</h4>
      </div>

      <div className="card_content">
        <h4>Address:</h4>
        <p className="card_content_address">{fullAddress}</p>

        <p>
          Latitude: {lat}, Longitude: {lng}
        </p>

        <h4>Phone: {phone}</h4>

        <div className="card_content_buttons">
          {isToggled && <Audio width={50} height={50} color="#6e6e6e" />}

          {isToggled ? (
            <button onClick={handleTogglingEndCall}>End Call</button>
          ) : (
            <button onClick={handleTogglingCall}>
              {lastCalledUser === name ? "Call Again" : "Call"}
            </button>
          )}
        </div>

        {!isLoggedIn && (
          <p style={{ marginTop: 10, fontSize: 13, opacity: 0.8 }}>
            Please login to make a call.
          </p>
        )}
      </div>
    </div>
  );
}

export default UserCard;
