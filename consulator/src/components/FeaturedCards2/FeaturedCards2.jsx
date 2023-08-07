import React from 'react'
import "../FeaturedCards2/FeaturedCards2.scss"
import { useEffect, useState } from "react";

const FeaturedCards2 = () => {
    const [featured2, setFeatured2] = useState([]);
    const BASE_URL = "http://localhost:3001/";
    useEffect(() => {
      fetch(`${BASE_URL}featureditem`)
        .then((response) => response.json())
        .then((data) => {
            setFeatured2(data);
        });
    }, []);
  return (
    <section id="featured2">
      <div className="container">
        <div className="row g-3">
          {featured2.length > 0 && featured2.map((element, index) => (
                <div key={index}  className="col-xl-4">
                <div className="featured-item">
                  <div className="featured-img">
                    <img src={element.image} alt="imgs" />
                  </div>
                  <div className="featured-text">
                    <p>{element.tittle}</p>
                    <h2>{element.description}</h2>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCards2
