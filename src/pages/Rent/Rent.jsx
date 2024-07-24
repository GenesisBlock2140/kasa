import "./style.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/logements.json";
import DropDown from "../../components/Dropdown/DropDown";
import RentHost from "../../components/RentHost/RentHost";
import RentInfo from "../../components/RentInfo/RentInfo";
import Carrousel from "../../components/Carrousel/Carrousel";

const Rent = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [rentData, setRentData] = useState(null);

  useEffect(() => {
    const rent = data.find((item) => item.id === id);
    if (rent == null) {
      navigation("/error");
    } else {
      setRentData(rent);
    }
  }, [id]);

  console.log("rentdata", rentData);

  return (
    <>
      {rentData !== null && (
        <div className="rent-layout">
        <Carrousel rentImages={rentData.pictures} />
          <div className="rent-info">
            <RentInfo
              title={rentData.title}
              location={rentData.location}
              tags={rentData.tags}
            />
            <RentHost
              rating={rentData.rating}
              name={rentData.host.name}
              picture={rentData.host.picture}
            />
          </div>
          <div className="rent-dropdown">
            <DropDown title="Description" content={rentData.description} />
            <DropDown title="Equipements" content={rentData.equipments} />
          </div>
        </div>
      )}
    </>
  );
};

export default Rent;
