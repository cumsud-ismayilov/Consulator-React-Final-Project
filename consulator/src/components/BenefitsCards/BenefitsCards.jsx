import React from "react";
import { useEffect, useState } from "react";
import "../BenefitsCards/BenefitsCards.scss";
import { Link } from "react-router-dom";
const BenefitsCards = () => {
  const [benefits, setBenefits] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}benefitsitem`)
      .then((response) => response.json())
      .then((data) => {
        setBenefits(data);
      });
  }, []);

  return (
    <section id="blog-packagestwo">
      <div className="container">
        <div className="row g-3">
          {benefits.length > 0 &&
            benefits.map((element, index) => (
              <div key={index} className="col-xl-4">
                <div className="benefitcards">
                    <div className="cards-img">
                        <img src={element.image} alt="img" />
                    </div>
                    <div className="benefits-text">
                        <p><Link to="/servicesingle2">{element.desc}</Link></p>
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
