import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">🎓 Student Portal</div>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" className="nav-item dashboard-btn">
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/addStudent" className="nav-item add-btn">
              + Add Student
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
