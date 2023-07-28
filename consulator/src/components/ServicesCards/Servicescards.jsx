import React from 'react'
import { useEffect, useState } from "react";
import "../ServicesCards/Servicescards.scss"

const Servicescards = () => {
    const [services ,setServices] =useState([]);
    const BASE_URL = "http://localhost:3001/";
    useEffect(() => {
      fetch(`${BASE_URL}servicesitem`)
        .then((response) => response.json())
        .then((data) => {
            setServices(data);
        });
    }, []);

  return (
    <section id='inner'>
      <div className='container'>
        <div className='row g-3'>
        {services.length > 0 && services.map((element, index) => (
             <div key={index}  className='col-xl-4'>
                <div className='services-cards'>
                    <div className='services-image'>
                        <img src={element.image} alt="images" />
                    </div>
                    <div className='cards-tittle'>
                        <p>{element.description}</p>
                        <h4>{element.tittle}</h4>
                    </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicescards
