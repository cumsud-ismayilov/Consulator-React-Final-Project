import React from "react";
import { Link } from "react-router-dom";
import "../Projectsingle/Projectsingle.scss";
const Projectsingle = () => {
  return (
    <main>
      <section id="projectsingle">
        <div className="back-img">
          <div className="breadcumb-text">
            <p>Project Single</p>
            <ul className="pricing-ul">
              <li className="pricing-li1">
                <Link to="/">Home /</Link>
              </li>
              <li className="pricing-li2">Project</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="project-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="projectsingle-img">
                <img
                  src="	http://consultar-react.wpocean.com/static/media/1.452a26e6.jpg"
                  alt="img"
                />
              </div>
              <div className="project-content1">
                <div className="project-content1-left">
                  <p>Digital Analysis</p>
                  <h2>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful.{" "}
                  </h2>
                  <h3>
                    Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain, but because
                    occasionally circumstances occur in which toil and pain can
                    procure him some great pleasure. To take a trivial example,
                    which of us ever undertakes laborious physical exercise.
                  </h3>
                </div>
                <div className="project-content1-right">
                  <ul>
                    <li className="client">
                      Client :<span>Robert William</span>
                    </li>
                    <li className="client">
                      Location :<span>7 Lake Street,London</span>
                    </li>
                    <li className="client">
                      Date :<span>20 Apr 2021</span>
                    </li>
                    <li className="client">
                      Duration :<span>3 Month</span>
                    </li>
                    <li className="tag">
                      Tag :<span>Consulting, Business</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="projectsingle-img2">
                <img
                  src="	http://consultar-react.wpocean.com/static/media/2.989811c2.jpg"
                  alt="img1"
                />
                <img
                  src="	http://consultar-react.wpocean.com/static/media/3.f800ab1b.jpg"
                  alt="img2"
                />
              </div>
              <h5>Best Benefits of Project</h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projectsingle;
