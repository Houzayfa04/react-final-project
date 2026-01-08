import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="home_container">
      <div className="home_content">
        <h2>About This Website</h2>
        <p>
          This demo contact website is built with React and React Router. It
          displays a list of demo users and lets you interact with them in a
          simple way.
        </p>
        <p>
          Contacts are loaded from an online API, then shown as clean cards with
          name, email, full address and location coordinates.
        </p>
        <p>
          You can simulate calling any user, and the app remembers the{" "}
          <strong>last called user</strong>, which appears on the home page.
        </p>
        <p>
         The project was inspired by the idea of creating a simple and modern React application that helps users practice real-world web development skills.
        </p>
        <p>
          This project was developed by Adamfrijeh, Fall 2025–2026.
        </p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
}
export default About;
