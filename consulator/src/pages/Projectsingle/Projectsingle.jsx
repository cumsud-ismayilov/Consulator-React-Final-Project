import React from "react";
import { Link } from "react-router-dom";
import "../Projectsingle/Projectsingle.scss";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import BenefitsCards from "../../components/BenefitsCards/BenefitsCards";
import BreadCumbArea from "../../components/BreadCumbArea/BreadCumbArea";
const Projectsingle = () => {
  return (
    <main>
<BreadCumbArea header="Project Single" tittle1="Home /" tittle2="Projects" />
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
              <h5 className="best">Best Benefits of Project</h5>
              <BenefitsCards />
              <h4>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter consequences that are
                extremely painful. Nor again is there anyone who loves or
                pursues or desires to obtain pain of itself, because it is pain,
                but because occasionally circumstances occur in which toil and
                pain can procure him some great pleasure.{" "}
              </h4>
              <h1>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem Ut enim ad minima veniam, quis
                nostrum exercitationem .
              </h1>
              <div className="tag-share">
                <div className="tags">
                  <ul>
                    <li className="share-li">
                      <Link to="/projectsingle">Consulting</Link>
                    </li>
                    <li className="share-li">
                      <Link to="/projectsingle">Business</Link>
                    </li>
                    <li className="share-li">
                      <Link to="/projectsingle">Idea</Link>
                    </li>
                  </ul>
                </div>
                <div className="share">
                  <span>Share:</span>
                  <p>
                    <BiLogoFacebook />
                  </p>
                  <p>
                    <BiLogoTwitter />
                  </p>
                  <p>
                    <BiLogoLinkedin />
                  </p>
                  <p>
                    <BiLogoInstagram />
                  </p>
                </div>
              </div>
              <div className="more-posts">
                <div className="previous-post">
                  <img
                    src="	http://consultar-react.wpocean.com/static/media/prev.31fee43c.png"
                    alt="img"
                  />
                  <div className="previous-text">
                    <h5>Previous Post</h5>
                    <h6>Creativity of Planning</h6>
                  </div>
                </div>
                <div className="next-post">
                    <div className="previous-text">
                    <h5>Next Post</h5>
                    <h6>Digital Product Development</h6>
                  </div>
                  <img
                    src="http://consultar-react.wpocean.com/static/media/next.1a4923e1.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projectsingle;
