/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const Countries = ({data,setSingle}) => {
  return <div className="countries">
    {
      data.map((country,i) =>{
        return (          
            <div className="cardt" key={i} onClick={() => setSingle(country)}>
              <h3>{country.name}</h3>
              <p>
                {" "}
                <strong>population: </strong> {country.population}
              </p>
              <p>
                {" "}
                <strong>region: </strong> {country.region}
              </p>
              <p>
                {" "}
                <strong>capital: </strong> {country.capital}
              </p>
            </div>          
        );
      })
    }
  </div>;
};
export default Countries;
