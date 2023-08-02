import React from "react";
import { useEffect, useState } from "react";
import "../ServiceSingleCards/ServiceSingleCards.scss"

import { Link } from "react-router-dom";
const BenefitsCards = () => {
  const [singlecards, setSinglecards] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}servicesingleitem`)
      .then((response) => response.json())
      .then((data) => {
        setSinglecards(data);
      });
  }, []);

  return (
    <section id="servicesingle-cards">
      <div className="container">
        <div className="row g-3">
          {singlecards.length > 0 &&
            singlecards.map((element, index) => (
              <div key={index} className="col-xl-3">
                <div className="benefitcards">
                    <div className="cards-img">
                        <img src={element.image} alt="img" />
                    </div>
                    <div className="benefits-text">
                        <p><Link to="/servicesingle">{element.desc}</Link></p>
                        <h2>{element.tittle}</h2>
                    </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;
