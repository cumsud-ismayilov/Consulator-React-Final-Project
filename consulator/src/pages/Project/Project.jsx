import React from 'react'
import { Link } from "react-router-dom";
import "../Project/Project.scss"
import Breadcumb from '../../components/Breadcumbgallery/Breadcumb';
const Project = () => {
  return (
    <main>
       <section id='projecttwo'>
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
      <Breadcumb/>
    </main>
  )
}

export default Project
