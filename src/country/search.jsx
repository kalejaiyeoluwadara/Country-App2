/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ data, tdata, setTdata }) => {
  const [se, setSe] = useState("");
  const [rg, setRg] = useState("");

  const handleSearch = (e) => {
    setSe(e.target.value)
    const newtdata = data.filter((d) =>
      d.name.toLowerCase().includes(se.toLowerCase())
    );
    setTdata(newtdata);
  };

  const handleReg = (e) => {
    setTdata(data);
    const region = e.target.value;
    const newtdata = data.filter((d) => d.region === region);
    setTdata(newtdata);
  };

  return (
    <div className="search">
      <div className="input">
        <label htmlFor="term">
          <AiOutlineSearch className="icon3" size={20} />
        </label>
        <input
          type="text"
          id="term"
          name="term"
          placeholder="Search for a co..."
          value={se}
          onChange={handleSearch}
        />
      </div>
      <div className="sect">
        <select name="regions" id="regions" onChange={handleReg}>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Americas">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
