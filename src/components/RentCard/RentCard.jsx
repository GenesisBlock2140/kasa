import "./style.scss";
import { Link } from "react-router-dom";

const RentCard = ({ image, imgAlt, title, id }) => {
  return (
    <Link to={`/rent/${id}`} className="rentcard-container">
      <img src={image} alt={imgAlt} className="rentcard-img" />
      <p className="rentcard-title">{title}</p>
    </Link>
  );
};

export default RentCard;