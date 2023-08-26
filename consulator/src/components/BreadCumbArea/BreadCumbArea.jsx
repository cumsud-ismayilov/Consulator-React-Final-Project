import React from "react";
import "../BreadCumbArea/BreadCumbArea.scss";
import { Link } from "react-router-dom";
const BreadCumbArea = ({header, tittle1, tittle2}) => {
  return (
    <section id="about-us">
      <div className="back-img">
        <div className="breadcumb-text">
          <p>{header}</p>
          <ul className="pricing-ul">
            <li className="pricing-li1">
              <Link to="/">{tittle1}</Link>
            </li>
            <li className="pricing-li2">{tittle2}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BreadCumbArea;
