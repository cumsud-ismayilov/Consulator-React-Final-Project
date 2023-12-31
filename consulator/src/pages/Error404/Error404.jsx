import React from "react";
import "../Error404/Error404.scss";
import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import BreadCumbArea from "../../components/BreadCumbArea/BreadCumbArea";
const Error404 = () => {
  return (
    <main>
      <BreadCumbArea header="404" tittle1="Home /" tittle2="404" />
      <section id="error404">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="error404-sec">
                <div className="error404-img">
                  <img
                    src="http://consultar-react.wpocean.com/static/media/error-404.efacc3ba.png"
                    alt="error-img"
                  />
                </div>
                <div className="error404-text">
                  <p>Oops! Page Not Found!</p>
                  <h3>
                    We’re sorry but we can’t seem to find the page you
                    requested. This might be because you have typed the web
                    address incorrectly.
                  </h3>
                  <button className="turnhome">
                    <Link to="/">
                      <AiOutlineDoubleLeft /> Back to home
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error404;
