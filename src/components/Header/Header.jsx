import LOGO from "../../assets/images/LOGO.jpg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <img src={LOGO} alt="Logo KASA" />
        <nav>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              <li>Accueil</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              <li>A propos </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
