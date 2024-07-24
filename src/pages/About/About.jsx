import "./style.scss";

import DropDown from "../../components/Dropdown/DropDown";
import FondAbout from "../../assets/fond-about.png";
import Image from "../../components/Image/Image";

const About = () => {
  return (
    <>
      <Image image={FondAbout} />
      <div className="about-faq-box">
        <DropDown
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
        />
        <DropDown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
        />
        <DropDown
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
        />
        <DropDown
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nous hôtes que pour les voyageurs, chaque logement correspond aux critéères de sécurité établis par nos services.En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </>
  );
};

export default About;
