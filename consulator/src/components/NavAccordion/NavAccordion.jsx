import React from "react";
import "../NavAccordion/NavAccordion.scss";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const NavAccordion = ({ tittle, desc1, desc2, desc3, actives, setActives }) => {
  return (
    <div className="accordion">
      <div className="accordion-heading">
        <div className="accordion-main1">
          <p>{tittle}</p>
          <FiChevronRight
            color="#fff"
            size="16px"
            onClick={() => setActives(tittle)}
          />
        </div>
      </div>

      <div
        className={
          actives === tittle ? "accordion-content show" : "accordion-content"
        }
      >
        <div className="accordion-main2">
          <p>
            <Link to="/homestyle1">{desc1}</Link>
          </p>
          <p>
            <Link to="/homestyle2">{desc2}</Link>
          </p>
          <p>
            <Link to="/homestyle3">{desc3}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavAccordion;
