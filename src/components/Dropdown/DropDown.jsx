import "./style.scss";
import { useState, useRef } from "react";
import ArrowIcon from "../../assets/icons/arrow-icon.png";

const DropDown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleOpenDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown-box">
      <div className="dropdown-header">
        <p>{title}</p>
        <img
          src={ArrowIcon}
          alt="trigger dropdown icon"
          onClick={handleOpenDropdown}
          className={isOpen ? "rotate" : "rotate-back"}
        />
      </div>
      <div
        ref={contentRef}
        className={`dropdown-content ${isOpen ? "open" : "closed"}`}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px", opacity: isOpen ? "1" : "0" }}
      >
        <ul>
          {Array.isArray(content) ? (
            content.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>{content}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
