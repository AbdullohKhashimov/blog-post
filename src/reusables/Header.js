import React, { useContext } from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowsize from "../hooks/useWindowSize";

const Header = (props) => {
  const { title } = props;
  const { width } = useWindowsize();
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
