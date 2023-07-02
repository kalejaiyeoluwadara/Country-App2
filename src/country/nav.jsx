/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";


const Nav = ({ mode, changeMode }) => {
  return (
    <nav className={mode.nav}>
      <div>
        <h5>where in the word</h5>
      </div>
      <div>
        <h5 id="mode" onClick={changeMode}>
          {mode.nav === "nav" ? <FaMoon className="icon1" /> : <FaSun className="icon1" />}
          {mode.nav === "nav2" ? "Light mode" : "dark mode"}
        </h5>
      </div>
    </nav>
  );
};

export default Nav;
