import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Header = (props) => {
  const { title, width } = props;
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
