/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
const Countries =({data,single,setSingle})=>{
    return (
      single ? (
      <>
        {single.map((t, index) => {
          return (
            <div
            key={index}
            className="item_card"            
            >
            <button onClick={()=>setSingle(null)}>back</button>
              {/* <div className="imc">
                <img src={single.flags.svg} alt={single.name} />
              </div> */}

              <div className="cardt">
                <h3>{t.name}</h3>
                <p>
                  {" "}
                  <strong>population: </strong> {t.population}
                </p>
                <p>
                  {" "}
                  <strong>region: </strong> {t.region}
                </p>
                <p>
                  {" "}
                  <strong>capital: </strong> {t.capital}
                </p>
              </div>
            </div>
          );
        })}
      </>
    ) : (
      <>
        {data.map((t, index) => {
          return (
            <div
              key={index}
              className="item_card"
              onClick={() => {
                setSingle(t);
              }}
            >
              {/* <div className="imc">
                <img src={t.flags.svg} alt={t.name} />
              </div> */}

              <div className="cardt">
                <h3>{t.name}</h3>
                <p>
                  {" "}
                  <strong>population: </strong> {t.population}
                </p>
                <p>
                  {" "}
                  <strong>region: </strong> {t.region}
                </p>
                <p>
                  {" "}
                  <strong>capital: </strong> {t.capital}
                </p>
              </div>
            </div>
          );
        })}
      </>
    ))
}
export default Countries;