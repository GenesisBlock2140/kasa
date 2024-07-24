import "./style.scss";
import MainFond from "../../assets/main-fond.png";
import Image from "../../components/Image/Image";
import RentCard from "../../components/RentCard/RentCard";
import data from "../../data/logements.json";

const Home = () => {
  return (
    <>
      <Image image={MainFond} text="Chez vous, partout et ailleurs" />
      <div className="card-container">
        {data.map((item, i) => (
          <RentCard
            key={i}
            image={data[i].cover}
            imgAlt={item.title}
            title={item.title}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
