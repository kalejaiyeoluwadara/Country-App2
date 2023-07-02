/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./country.css";
import Countries from "./countries";
import Single from "./single";
import Nav from "./nav";
import SearchBar from "./search";

export default function Country() {
  const [cont, setCont] = useState([]);
  const [tdata,setTdata] = useState(data);
  const [single, setSingle] = useState(null);
  const [mode, setMode] = useState({
    nav: "nav",
    cont: "mcontainer",
  });
  const changeMode = () => {
    setMode((prevMode) => ({
      ...prevMode,
      nav: prevMode.nav === "nav" ? "nav2" : "nav",
      cont: prevMode.cont === "mcontainer" ? "mcontainer2" : "mcontainer",
    }));
  };
  return (
    <div className={mode.cont}>
      {!single && <Nav mode={mode} changeMode={changeMode} />}
      {!single && (
        <SearchBar
          data={data}
          view={single}
          setSingle={setSingle}
          tdata={tdata}
          setTdata={setTdata}
        />
      )}
      <div className="mainCont">
        {/* if(single){}
        else{} */}
        {!single && <Countries data={tdata} setSingle={setSingle} />}
        {single && <Single view={single} setSingle={setSingle} />}
      </div>
    </div>
  );
}
