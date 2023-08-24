import React from "react";
import { useEffect, useState } from "react";
import "../FactsSection/FactsSection.scss";

const FactsSection = () => {
  const [facts, setFacts] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}factsdata`)
      .then((response) => response.json())
      .then((data) => {
        setFacts(data);
      });
  }, []);


  const getFacts = (id) => {
    switch (id) {
      case 1:
        return "text";
      case 2:
        return "text1";
      case 3:
        return "text2";
      case 4:
        return "text3";

      default:
        return "text";
    }
  };
  
  return (
    <section id="facts">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="facts-tittle">
            {facts.length > 0 &&
              facts.map((element, index) => (
                <div key={`facts ${index}`} className={getFacts(element.id)}>
                <p>{element.tittle}</p>
                <h2>{element.desc}</h2>
              </div>
              ))}
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
