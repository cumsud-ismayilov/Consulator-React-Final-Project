import React from 'react'
import { useEffect, useState } from "react";
import "../Breadcumbgallery/Breadcumb.scss"
import Plusimg from "../../images/plus (1).png"
const Breadcumb = () => {
    const [breadcumb, setBreadcumb] = useState([]);
    const BASE_URL = "http://localhost:3001/";
    useEffect(() => {
      fetch(`${BASE_URL}breadcumb`)
        .then((response) => response.json())
        .then((data) => {
            setBreadcumb(data);
        });
    }, []);

  return (
    <section id='breadcumb-card'>
      <div className='container'>
        <div className='row'>
        {breadcumb.length > 0 &&
            breadcumb.map((element, index) => (
               <div key={index} className='col-xl-4 g-3'>
                 <div className='gallery-cards'>
                    <div className='cards-img'>
                        <img src={element.images} alt="" />
                    </div>
                    <div className='card-hover'>
                        <p>{element.hovertext}</p>
                        <h3><img src={Plusimg} alt="plusimg" /></h3>
                    </div>
                 </div>
               </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Breadcumb
