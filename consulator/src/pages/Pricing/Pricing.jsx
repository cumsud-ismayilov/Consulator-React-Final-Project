import React from 'react'
import { Link } from "react-router-dom";
import "../Pricing/Pricing.scss"
import PackageCards from "../../components/PackageCards/PackageCard";
const Pricing = () => {
  return (
    <main>
      <section id='breadcumb-area'>
         <div className='back-img'>
            <div className='breadcumb-text'>
               <p>Pricing</p>
               <ul className='pricing-ul'>
                <li className='pricing-li1'><Link to="/">Home /</Link></li>
                <li className='pricing-li2'>Pricing</li>
               </ul>
            </div>
         </div>
      </section>
      <section id="banner99">
         <div className="container">
          <div className="row g-3">
             <div className="col-xl-12">
                <div className="banner-text">
                   <p>Pricing</p>
                   <h5 className='pricing-packages'>Our Pricing Packages</h5>
                </div>
             </div>
          </div>
         </div>
      </section>
      <PackageCards/>
    </main>
  )
}

export default Pricing
