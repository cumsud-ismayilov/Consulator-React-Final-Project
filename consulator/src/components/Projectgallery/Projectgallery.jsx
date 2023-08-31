import React from "react";
import { useEffect, useState } from "react";
import "../Projectgallery/Projectgallery.scss";
import Plusimg from "../../images/plus (1).png";
import { Link } from "react-router-dom";
const Projectgallery = () => {
  const [project, setProject] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}projectgallery`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  return (
    <section id="gallery">
      <div className="container">
        <div className="row">
          {project.length > 0 &&
            project.map((element, index) => (
              <div key={index} className="col-xl-3">
                <div className="gallery-cards">
                  <div className="cards-img">
                    <img src={element.images} alt="" />
                  </div>
                  <div className="card-hover">
                    <p>{element.hovertext}</p>
                    <h3>
                      <Link to="/projectsingle" ><img src={Plusimg} alt="plusimg" /></Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projectgallery;
