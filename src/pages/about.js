import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="home_container">
      <div className="home_content">
        <p>
          This webiste is developed by Houzayfa Ayouby. CSCI 492 Fall 2025-2026.
        </p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
}
export default About;
