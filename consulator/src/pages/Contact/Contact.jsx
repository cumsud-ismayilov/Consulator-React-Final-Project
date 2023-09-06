import React, { useState } from "react";
import "../Contact/Contact.scss";
import ContactCards from "../../components/ContactCards/ContactCards";
import Buttons from "../../components/ButtonComponent/Buttons";
import MapComponent from "../../components/MapComponent/MapComponent";
import BreadCumbArea from "../../components/BreadCumbArea/BreadCumbArea";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      lastname.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
    }
  };
  return (
    <main>
      <BreadCumbArea header="Contact Us" tittle1="Home /" tittle2="Contact" />
      <ContactCards />
      <section id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="wpo-contact-info">
                <p>Have Any Question?</p>
                <h2>
                  It is a long established fact that a reader will be distracted
                  content of a page when looking.
                </h2>
              </div>
              <div className="contact-form-area">
                <form onSubmit={handleSubmit}>
                  <div className="row justify-content-center">
                    <div className="col-xl-6">
                      <div className="form-field">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="name"
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                        {error ? <span>Please enter your name</span> : ""}
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-field">
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          className="lastname"
                          placeholder="Lastname"
                          onChange={(e) => setLastname(e.target.value)}
                        />
                        {error ? <span>Please enter your lastname</span> : ""}
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-field">
                        <input
                          type="email"
                          name="emaills"
                          id="emaills"
                          className="emailss"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {error ? <span>Please enter your email</span> : ""}
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-field">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="subject"
                          placeholder="Subject"
                          onChange={(e) => setSubject(e.target.value)}
                        />
                        {error ? <span>Please enter your subject</span> : ""}
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-field">
                        <textarea
                          name="message"
                          className="textarea"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-submit">
                        <Buttons
                          type="text"
                          className="sendmessage"
                          tittle="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MapComponent />
    </main>
  );
};

export default Contact;
