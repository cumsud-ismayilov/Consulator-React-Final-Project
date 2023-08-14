import React from 'react'
import { Link } from "react-router-dom";
import "../Contact/Contact.scss"
import ContactCards from '../../components/ContactCards/ContactCards';
import Buttons from "../../components/ButtonComponent/Buttons";



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
                 <div className='contact-form-area'>
                   <form>
                    <div className='row justify-content-center'>
                      <div className='col-xl-6'>
                         <div className='form-field'>
                            <input type="text" name="name" id="name" className='name' placeholder='Name' />
                         </div>
                      </div>
                      <div className='col-xl-6'>
                         <div className='form-field'>
                            <input type="text" name="lastname" id="lastname" className='lastname' placeholder='Lastname' />
                         </div>
                      </div>
                      <div className='col-xl-6'>
                         <div className='form-field'>
                            <input type="email" name="emaills" id="emaills" className='emailss' placeholder='Email' />
                         </div>
                      </div>
                      <div className='col-xl-6'>
                         <div className='form-field'>
                            <input type="text" name="subject" id="subject" className='subject' placeholder='Subject' />
                         </div>
                      </div>
                      <div className='col-xl-12'>
                        <div className='form-field'>
                           <textarea name="message" className='textarea' id="message" cols="30" rows="10" placeholder='Message'></textarea>
                        </div>
                      </div>
                      <div className='col-xl-12'>
                         <div className='form-submit'>
                            <Buttons type="text" className="sendmessage"  tittle="Send Message" />
                         </div>
                      </div>
                    </div>
                   </form>
                 </div>
             </div>
          </div>
        </div>
     </section>
    
   
    </main>
  )
}

export default Contact
