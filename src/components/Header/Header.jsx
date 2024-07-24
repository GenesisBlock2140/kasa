import kasaLogo from "../../assets/kasaLogo.png";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <div>
          <img src={kasaLogo} alt="logo kasa" className="img-nav" />
        </div>
        <ul className="nav-links">
          <li className={location.pathname === "/" ? "nav-links-active" : ""}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={location.pathname === "/a-propos" ? "nav-links-active" : ""}>
            <Link to="/a-propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;