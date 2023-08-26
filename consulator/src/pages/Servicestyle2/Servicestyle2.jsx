import React from 'react'
import "../Servicestyle2/Servicestyle2.scss"
import BreadCumbArea from '../../components/BreadCumbArea/BreadCumbArea';
import ServiceSlide from '../../components/ServiceSlide/ServiceSlide';
const Servicestyle2 = () => {
  return (
    <main>
 <BreadCumbArea header="Services" tittle1="Home /" tittle2="Services" />
      <section id="our-services21">
         <div className="container">
           <div className="row">
              <div className="col-xl-12">
                 <div className="ourservices-tittle">
                    <p>Our Services</p>
                    <h2 className='exploreservices'>Explore Our Services</h2>
                 </div>
              </div>
           </div>
         </div>
      </section>
      <ServiceSlide/>
    </main>
  )
}

export default Servicestyle2
