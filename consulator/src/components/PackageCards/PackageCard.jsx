import React from "react";
import { useEffect, useState } from "react";
import "../../components/PackageCards/PackageCard.scss";
import Buttons from "../ButtonComponent/Buttons";
import MedalImages from "../../images/badge.png";

const PackageCard = () => {
  const [packages, setPackages] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}packagesitem`)
      .then((response) => response.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);

  const getButtonColor = (id) => {
    switch (id) {
      case 1:
        return "btn btn-danger";
      case 2:
        return "btn btn-success";
      case 3:
        return "btn btn-warning";

      default:
        return "btn";
    }
  };

  return (
    <section id="package">
      <div className="container">
        <div className="row g-3">
          {packages.length > 0 &&
            packages.map((element, index) => (
              <div key={index} className="col-xl-4">
                <div className="package-cards">
                  <p>{element.description}</p>
                  <div className="package-img">
                    <img src={MedalImages} alt="packageimg" />
                  </div>
                  <ul className="package-ul">
                    <li className="same">{element.tittle1}</li>
                    <li className="same">{element.tittle2}</li>
                    <li className="same">{element.tittle3}</li>
                    <li className="different">{element.tittle4}</li>
                  </ul>

                  <Buttons
                    type="text"
                    className={getButtonColor(element.id)}
                    tittle="Choose Plan"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCard;
