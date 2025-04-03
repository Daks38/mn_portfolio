import { Link } from "react-router-dom";
import App from "../App";
const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">À propos</Link>
      <Link to="/projets-academiques">Projets académiques</Link>
      <Link to="/competences">Compétences</Link>
      <Link to="/certificats">Certificats</Link>
      <Link to="/contact">Contacts</Link>
    </div>
  );
};

export default Navigation;
