import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <h1>Student Management System</h1>
        <p>
          Manage student records easily using a modern React & Spring Boot
          application.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/dashboard")}>
            📊 Go to Dashboard
          </button>
          <button onClick={() => navigate("/addStudent")}>
            ➕ Add New Student
          </button>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <h3>📋 View Students</h3>
          <p>See all student details in one place.</p>
        </div>

        <div className="card">
          <h3>✏️ Update Records</h3>
          <p>Edit student information anytime.</p>
        </div>

        <div className="card">
          <h3>🗑️ Delete Students</h3>
          <p>Remove unwanted records safely.</p>
        </div>
      </section>
    </div>
  );
}
