import "./userCard.css";
import { useState, useContext } from "react";
import { Audio } from "react-loader-spinner";
import { MainContext } from "../../utils/context";
function UserCard({ name, email, address, phone }) {
  const { street, suite, city, zipcode, geo } = address;
  const { lat, lng } = geo;
  const [isToggled, setIsToggeled] = useState(false);
  const { lastCalledUser, storeLastCalledUser } = useContext(MainContext);
  function handleTogglingCall() {
    setIsToggeled(!isToggled);
    storeLastCalledUser(name);
  }
  function handleTogglingEndCall() {
    setIsToggeled(!isToggled);
  }
  return (
    <div className="card_container">
      <div className="card_header">
        <h2>{name}</h2>
        <h4>{email}</h4>
      </div>
      <div className="card_content">
        <h4>Address:</h4>
        <p className="card_content_address">
          {street},{suite},{city},{zipcode}
        </p>
        <p>
          Latitude: {lat}, Longitude: {lng}
        </p>
        <h4>Phone: {phone}</h4>
        <div className="card_content_buttons">
          {isToggled && <Audio width={50} height={50} color="#6e6e6e" />}
          {isToggled ? (
            <button onClick={handleTogglingEndCall}> End Call </button>
          ) : (
            <button onClick={handleTogglingCall}>
              {" "}
              {lastCalledUser === name ? "Call Again" : "Call"}{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default UserCard;
