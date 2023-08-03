import React from "react";
import { Link } from "react-router-dom";
import "../Testimional/Testimional.scss";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowLeft,BsArrowRight } from "react-icons/bs";
import TestimionalCards from "../../components/TestimionalSlide/TestimionalSlide"

const Testimional = () => {
  return (
    <main>
      <section id="testimional-page">
        <div className="back-img">
          <div className="breadcumb-text">
            <p>Testimonilal</p>
            <ul className="pricing-ul">
              <li className="pricing-li1">
                <Link to="/">Home /</Link>
              </li>
              <li className="pricing-li2">Testimonilal</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="testimional-tittle">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
               <div className="wpo-testimional-tittle">
                  <div className="tittle1">
                     <p><FaQuoteLeft/></p>
                     <h2> What <span>Our Clients</span> are Saying</h2>
                  </div>
                  <div className="tittle2">
                    <h4><BsArrowLeft/></h4>
                    <h5><BsArrowRight/></h5>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      <TestimionalCards/>
    </main>
  );
};

export default Testimional;
