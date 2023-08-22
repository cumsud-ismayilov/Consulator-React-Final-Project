import React from "react";
import { Link } from "react-router-dom";
import "../Service/Service.scss";
import ServicesCards from "../../components/ServicesCards/Servicescards";
const Service = () => {
  return (
    <main>
      <section id="service-page22">
        <div className="back-img">
          <div className="breadcumb-text">
            <p>Services</p>
            <ul className="pricing-ul">
              <li className="pricing-li1">
                <Link to="/">Home /</Link>
              </li>
              <li className="pricing-li2">Services</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="our-services22">
         <div className="container">
           <div className="row">
              <div className="col-xl-12">
                 <div className="ourservices-tittle">
                    <p>Our Services</p>
                    <h2 className="exploreservices">Explore Our Services</h2>
                 </div>
              </div>
           </div>
         </div>
      </section>
      <ServicesCards/>
    </main>
  );
};

export default Service;
