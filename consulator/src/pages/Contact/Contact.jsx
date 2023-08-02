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
     <section id='contact-section'>
        <div className='container'>
          <div className='row'>
             <div className='col-xl-10'>
                 <div className='wpo-contact-info'>
                    <p>Have Any Question?</p>
                    <h2>It is a long established fact that a reader will be distracted content of a page when looking.</h2>
                 </div>
             </div>
          </div>
        </div>
     </section>
    </main>
  )
}

export default Contact
