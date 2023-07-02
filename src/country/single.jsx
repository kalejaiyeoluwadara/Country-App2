/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Single = ({view,setSingle}) =>{
    return (
      <div className="single">
        <button
          className="btn"
          onClick={() => {
            setSingle(null);
          }}
        >
          <AiOutlineArrowLeft className="icon2" size={20} />
          back
        </button>
        <div className="con">
          <div className="flag">
            <img src={view.flags.svg} alt={view.name} />
          </div>
          <div className="content">
            <div key={view.name}>
              <h1 onClick={() => setSingle(null)}>{view.name}</h1>
              <div className="innertab">
                <p>
                  {" "}
                  <strong>Native name: </strong> {view.nativeName}
                </p>
                <p>
                  {" "}
                  <strong>population: </strong> {view.population}
                </p>
                <p>
                  {" "}
                  <strong>region: </strong> {view.region}
                </p>
                <p>
                  {" "}
                  <strong>sub region: </strong> {view.subregion}
                </p>
                <p>
                  {" "}
                  <strong>capital: </strong> {view.capital}
                </p>
                <p>
                  {" "}
                  <strong>sub region: </strong> {view.subregion}
                </p>
                {/* nextrow */}
                <p>
                  {" "}
                  <strong>top level domain: </strong> {view.topLevelDomain}
                </p>
                <p>
                  {" "}
                  <strong>currencies: </strong> {view.currencies[0].name}
                </p>
                <p>
                  {" "}
                  <strong>Languages: </strong>{" "}
                  {view.languages.map((c, id) => {
                    return <span key={id}>{c.name}, </span>;
                  })}
                </p>
                <div>
                  <p>
                    <strong>border countries: </strong>
                    {view.borders &&
                      view.borders.map((b, id) => {
                        return (
                          <span className="brd" key={id}>
                            {b}{" "}
                          </span>
                        );
                      })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Single
