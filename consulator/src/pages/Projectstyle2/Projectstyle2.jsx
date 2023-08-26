import React from 'react'
import { Link } from "react-router-dom";
import "../Projectstyle2/Projectstyle2.scss"
import Projectgallery from "../../components/Projectgallery/Projectgallery";
import BreadCumbArea from '../../components/BreadCumbArea/BreadCumbArea';
const Projectstyle2 = () => {
  return (
    <main>
 <BreadCumbArea header="Projects" tittle1="Home /" tittle2="Projects" />
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
