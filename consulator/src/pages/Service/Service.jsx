import React from "react";
import BreadCumbArea from "../../components/BreadCumbArea/BreadCumbArea";
import "../Service/Service.scss";
import ServicesCards from "../../components/ServicesCards/Servicescards";
const Service = () => {
  return (
    <main>
 <BreadCumbArea header="Services" tittle1="Home /" tittle2="Services" />
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
