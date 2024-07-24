import "./style.scss";
import Badge from "../Badge/Badge";

const RentInfo = ({ title, location, tags }) => {
  return (
    <>
    <div>
      <p className="rent-title">{title}</p>
      <p className="rent-text">{location}</p>
      <div className="rent-tags">
        {tags.map((item, i) => <Badge key={i} text={item} /> )}
      </div>
    </div>
    </>
  )
}

export default RentInfo;