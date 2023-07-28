import React from "react";
import { useEffect, useState } from "react";
import '../FeaturedCards/Featured.scss'

const FeaturedCards = () => {
  const [featured, setFeatured] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}featureditem`)
      .then((response) => response.json())
      .then((data) => {
        setFeatured(data);
      });
  }, []);

  return (
    <section id="featured">
      <div className="container">
        <div className="row g-3">
          {featured.length > 0 && featured.map((element, index) => (
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
  );
};

export default FeaturedCards;
