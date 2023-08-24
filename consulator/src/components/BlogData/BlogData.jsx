import React from "react";
import { useEffect, useState } from "react";

import "../BlogData/BlogData.scss";

const BlogData = () => {
  const [blogs, setBlogs] = useState([]);
  const BASE_URL = "http://localhost:3001/";

  useEffect(() => {
    fetch(`${BASE_URL}blogitem`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <section id="blog-packages">
      <div className="container">
        <div className="row g-3">
          {blogs.length > 0 &&
            blogs.map((element, index) => (
              <div key={index} className="col-xl-4">
                <div className="blog-cards">
                  <div className="blog-img">
                    <img src={element.image} alt="blogimg" />
                  </div>
                  <div className="cards-bottom">
                    <div className="blog-tittle">
                      <p>{element.description}</p>
                      <h2>{element.tittle}</h2>
                    </div>
                    <div className="person-line">
                      <div className="person-about">
                        <img src={element.personimage} alt="personimg" />
                        <div className="person-name">
                          <h4>{element.name}</h4>
                          <h5>{element.profession}</h5>
                        </div>
                      </div>
                      <h6>{element.date}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogData;
