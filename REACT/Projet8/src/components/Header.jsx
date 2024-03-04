//pour importer une image on doit d'abord l,importer et ensuite l indiquer dans le src de notre balise img
import LOGO from "../assets/images/LOGO.jpg";
//composant pour la navigation
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <img src={LOGO} alt="Logo KASA" />
        <nav>
          <ul>
            <NavLink to="/">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/about">
              <li>A propos </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
