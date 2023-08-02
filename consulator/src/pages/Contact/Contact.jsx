import React from 'react'
import { Link } from "react-router-dom";
import "../Contact/Contact.scss"
import ContactCards from '../../components/ContactCards/ContactCards';
const Contact = () => {
  return (
    <main>
        <section id="contactpage">
        <div className="back-img">
          <div className="breadcumb-text">
            <p>Contact Us</p>
            <ul className="pricing-ul">
              <li className="pricing-li1">
                <Link to="/">Home /</Link>
              </li>
              <li className="pricing-li2">Contact</li>
            </ul>
          </div>
        </div>
      </section>
     <ContactCards/>
    </main>
  )
}

export default Contact
