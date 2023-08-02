import React from "react";
import { useEffect, useState } from "react";
import "../ContactCards/ContactCards.scss"
const ContactCards = () => {
  const [contact, setContact] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}officeinfo`)
      .then((response) => response.json())
      .then((data) => {
        setContact(data);
      });
  }, []);

  return (
    <section id="contactinfo-cards">
      <div className="container">
        <div className="row g-3">
          <div className="col-xl-10">
            <div className="row">
              {contact.length > 0 &&
                contact.map((element, index) => (
                  <div key={index} className="col-xl-4">
                    <div className="contact-cards">
                      <h4>
                        <img src={element.image} alt="imgs"></img>
                      </h4>
                      <div className="contact-text">
                        <p>{element.caption}</p>
                        <h2>{element.tittle||element.email||element.number1}</h2>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
