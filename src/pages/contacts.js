import UserCard from "../components/userCard/userCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Contacts() {
  const [users, setUsers] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      isLoading(false);
    };

    getData();
  }, []);

  return (
    
    <div className="contacts_container">
      <div className="contacts_cards">
        <div className="contacts_topbar">
          <Link to="/" className="back_button">← Back to Home</Link>
        </div>
        {loading ? (
          <p>Data is loading</p>
        ) : (
          users.map((user, index) => {
            return (
              <UserCard
                key={index}
                name={user.name}
                email={user.email}
                address={user.address}
                phone={user.phone}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Contacts;
