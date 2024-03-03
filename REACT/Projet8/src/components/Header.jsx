//pour importer une image on doit d'abord l,importer et ensuite l indiquer dans le src de notre balise img
import LOGO from "../assets/images/LOGO.jpg";

function Header() {
  return (
    <div>
      <div className="header">
        <img src={LOGO} alt="Logo KASA" />
        <nav>
          <ul>
            <li>Accueil</li>
            <li>A propos </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
