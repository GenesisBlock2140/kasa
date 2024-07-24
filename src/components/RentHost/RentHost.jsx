import Rating from "../Rating/Rating";
import "./style.scss";

const RentHost = ({ rating, name, picture }) => {
  
  const splitName = (fullName) => {
    const [firstName, lastName] = fullName.split(" ");
    return { firstName, lastName };
  };

  const { firstName, lastName } = splitName(name);

  return (
    <>
      <div className="renthost-box">
        <div className="profilicon-box">
          <div>
            <p className="profil-hostname">
              {firstName}
              <br />
              {lastName}
            </p>
          </div>
          <div>
            <img src={picture} alt={name} className="profil-picture" />
          </div>
        </div>
        <Rating activeStars={rating} />
      </div>
    </>
  );
};

export default RentHost;
