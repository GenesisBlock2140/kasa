import { Link } from "react-router-dom";
import './style.scss';

const Error = () => {
  return (
    <div className="error-content">
      <h1>404</h1>
      <p className="error-msg">Oups! La page que vous demandez n'existe pas.</p>
      <Link to={"/"} className="back-to-home">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error;