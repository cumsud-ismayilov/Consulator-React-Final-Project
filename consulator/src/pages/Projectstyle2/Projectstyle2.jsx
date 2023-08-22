import React from 'react'
import { Link } from "react-router-dom";
import "../Projectstyle2/Projectstyle2.scss"
import Projectgallery from "../../components/Projectgallery/Projectgallery";
const Projectstyle2 = () => {
  return (
    <main>
       <section id='projectstyle2'>
         <div className='back-img'>
            <div className='breadcumb-text'>
               <p>Projects</p>
               <ul className='pricing-ul'>
                <li className='pricing-li1'><Link to="/">Home /</Link></li>
                <li className='pricing-li2'>Projects</li>
               </ul>
            </div>
         </div>
      </section>
      <section id="projects-galery2s">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="projectgalery-text">
                 <div className="text1">
                   <p>Projects</p>
                   <h2>Our Project Gallery</h2>
                 </div>
                 <h4><Link to="/projects">More Projects</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projectgallery/>
    </main>
  )
}

export default Projectstyle2
