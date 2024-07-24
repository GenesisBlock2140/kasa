import "./style.scss";
import { useState } from "react";
import BtnNextBig from "../../assets/icons/btn-next-big.png";
import BtnPrevBig from "../../assets/icons/btn-prev-big.png";
import BtnNextSmall from "../../assets/icons/btn-next-small.png";
import BtnPrevSmall from "../../assets/icons/btn-prev-small.png";

const Carrousel = ({ rentImages }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="carrousel-box">
        <img
          src={rentImages[index]}
          alt="rent images"
          className="carrousel-image"
        />
        <div className="carrousel-number">
          {rentImages.length > 1 && (
            <p>
              {index + 1}/{rentImages.length}
            </p>
          )}
        </div>
        
        {rentImages.length > 1 && (
          <>
            <img
              src={BtnPrevBig}
              alt="Previous"
              onClick={() =>
                index === 0
                  ? setIndex(rentImages.length - 1)
                  : setIndex(index - 1)
              }
              className="carrousel-btn-prev carrousel-btn-big"
            />
            <img
              src={BtnNextBig}
              alt="Next"
              onClick={() =>
                index === rentImages.length - 1
                  ? setIndex(0)
                  : setIndex(index + 1)
              }
              className="carrousel-btn-next carrousel-btn-big"
            />

            <img
              src={BtnPrevSmall}
              alt="Previous"
              onClick={() =>
                index === 0
                  ? setIndex(rentImages.length - 1)
                  : setIndex(index - 1)
              }
              className="carrousel-btn-prev carrousel-btn-small"
            />

            <img
              src={BtnNextSmall}
              alt="Next"
              onClick={() =>
                index === rentImages.length - 1
                  ? setIndex(0)
                  : setIndex(index + 1)
              }
              className="carrousel-btn-next carrousel-btn-small"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Carrousel;
