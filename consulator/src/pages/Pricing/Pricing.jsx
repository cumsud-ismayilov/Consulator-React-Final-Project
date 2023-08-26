import React from 'react'
import BreadCumbArea from '../../components/BreadCumbArea/BreadCumbArea';
import "../Pricing/Pricing.scss"
import PackageCards from "../../components/PackageCards/PackageCard";
const Pricing = () => {
  return (
    <main>
<BreadCumbArea header="Pricing" tittle1="Home /" tittle2="Pricing" />
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
