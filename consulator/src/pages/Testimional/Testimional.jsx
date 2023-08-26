import React from "react";
import "../Testimional/Testimional.scss";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import TestimionalCards from "../../components/TestimionalSlide/TestimionalSlide";
import BreadCumbArea from "../../components/BreadCumbArea/BreadCumbArea";
const Testimional = () => {
  return (
    <main>
      <BreadCumbArea header="Testimional" tittle1="Home /" tittle2="Testimional" />
      <section id="testimional-tittle">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="wpo-testimional-tittle">
                <div className="tittle1">
                  <p className="queto">
                    <FaQuoteLeft />
                  </p>
                  <h2 className="our-clients ">
                    {" "}
                    What <span>Our Clients</span> are Saying
                  </h2>
                </div>
                <div className="tittle2">
                  <h4 className="two-arrow">
                    <BsArrowLeft />
                  </h4>
                  <h5 className="two-arrow">
                    <BsArrowRight />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimionalCards />
    </main>
  );
};

export default Testimional;
