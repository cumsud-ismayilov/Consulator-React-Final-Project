import React, { useState } from "react";
import Buttons from "../../components/ButtonComponent/Buttons";
import Featured from "../../components/FeaturedCards/Featured";
import FactsSection from "../../components/FactsSection/FactsSection";
import PackageCards from "../../components/PackageCards/PackageCard";
import BlogData from "../../components/BlogData/BlogData";
import Projectgallery from "../../components/Projectgallery/Projectgallery";
import "../Homestyle2/Homestyle2.scss";
import ServiceSlide from "../../components/ServiceSlide/ServiceSlide";
import TestimionalCards from "../../components/TestimionalSlide/TestimionalSlide";
import { FaPlay, FaQuoteLeft } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { TfiClose } from "react-icons/tfi";
const Homestyle2 = () => {
  const [modals, setModals] = useState(false);
  const showModals = () => setModals(!modals);
  return (
    <main>
      <section id="wpo-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="wpo-hero-section-text">
                <div className="wpo-hero-title-top">
                  <span>We bring the right people together.</span>
                </div>
                <div className="wpo-hero-title">
                  <h2>
                    Making Your <span>Business</span> Idea Come True
                  </h2>
                </div>
                <div className="wpo-hero-subtitle">
                  <p>
                    Facilitating client learning—that is, teaching clients how
                    to resolve similar problems in the future.
                  </p>
                </div>
                <Buttons
                  type="text"
                  className="start-get"
                  tittle="Get Started"
                />
                <div className="video-btn">
                  <h1>
                    <FaPlay color="#3757f7" size="28px" onClick={showModals} />
                  </h1>
                  <div
                    className={modals ? "modal-video active" : "modal-video"}
                  >
                    <div className="thisvideo">
                      <p className="closebutton">
                        <TfiClose
                          cursor="pointer"
                          size="35px"
                          color="#fff"
                          onClick={showModals}
                        />
                      </p>
                      <ReactPlayer
                        width="100%"
                        height="100%"
                        controls
                        url="https://www.youtube.com/watch?v=7Jv48RQ_2gk"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-img"></div>
      </section>
      <Featured />
      <section id="about-section6">
        <div className="container">
          <div className="row g-3">
            <div className="col-xl-6">
              <div className="about-img">
                <img
                  className="imgs1"
                  src="http://consultar-react.wpocean.com/static/media/about.070f7dbe.jpg"
                  alt="main-img"
                />
                <img
                  className="imgs2"
                  src="http://consultar-react.wpocean.com/static/media/ab-shape-1.2390efe6.png"
                  alt="img2"
                />
                <img
                  className="imgs3"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABxCAYAAADifkzQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NjFlNThlYi05MTMxLTVmNDItOTgzOC00MGJjMmNmYWEzY2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDY3MEIyQ0RBMDEzMTFFQkFCQ0JGRjk2RDgyNUMxMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDY3MEIyQ0NBMDEzMTFFQkFCQ0JGRjk2RDgyNUMxMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTIwNmU4OWUtYWYxOS00YTRlLTg4YWUtMzdiZWE1ZTk1NWExIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhhNmZiM2YtYmY3Yy00ODRkLWFiODEt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"
                  alt="imgs3"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="professional">
                <div className="prof-img">
                  <img
                    src="http://consultar-react.wpocean.com/static/media/badge.97f754ae.svg"
                    alt="prof-img"
                  />
                </div>
                <h2>
                  Professional And Dedicated <span>Consulting</span> Solutions
                </h2>
                <p>
                  Management consulting includes a broad range of activities,
                  and the many firms and their members often define these
                  practices quite differently. One way to categorize the
                  activities is in terms of the professional’s area of expertise
                  (such as competitive analysis, corporate strategy, operations
                  management, or human resources). But in practice, as many
                  differences exist within these categories as between them.
                </p>
                <div className="prof-img2">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAsCAYAAACaAr0vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NjFlNThlYi05MTMxLTVmNDItOTgzOC00MGJjMmNmYWEzY2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJENDEwNzBBMDE5MTFFQjk4RTg4N0E2MTc3RkY2RjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJENDEwNkZBMDE5MTFFQjk4RTg4N0E2MTc3RkY2RjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTIwNmU4OWUtYWYxOS00YTRlLTg4YWUtMzdiZWE1ZTk1NWExIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhhNmZiM2YtYmY3Yy00ODRkLWFiODEt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"
                    alt="imgs"
                  />
                </div>
                <h4>Robert William, CEO</h4>
                <Buttons type="text" tittle="More About" className="more" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our-services6">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="ourservices-tittle">
                <p>Our Services</p>
                <h2>Explore Our Services</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceSlide />
      <section id="banner6">
        <div className="container">
          <div className="row g-3">
            <div className="col-xl-12">
              <div className="banner-text">
                <p>Pricing</p>
                <h5>Our Pricing Packages</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PackageCards />
      <FactsSection />
      <section id="projects-galery6">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="projectgalery-text">
                <div className="text1">
                  <p>Projects</p>
                  <h2>Our Project Gallery</h2>
                </div>
                <h4>
                  <Link to="/projects">More Projects</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projectgallery />
      <section id="testimional-tittle6">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="wpo-testimional-tittle">
                <div className="tittle1">
                  <p className="queto">
                    <FaQuoteLeft />
                  </p>
                  <h2 className="our-clients">
                    {" "}
                    What <span>Our Clients</span> are Saying
                  </h2>
                </div>
                <div className="tittle2">
                  <h4 className="two-arrow ">
                    <BsArrowLeft />
                  </h4>
                  <h5 className="two-arrow ">
                    <BsArrowRight />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimionalCards />
      <section id="questions6">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="questions-line">
                <div className="questions-text">
                  <p>Have You a Different Question?</p>
                  <h2>
                    Please create a ticket to our support forum,a great place to
                    learn, share, and troubleshoot. Get started.
                  </h2>
                </div>
                <h4 className="support">
                  <Link to="/contact">Ask Support Ticket</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog6">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="blog-text">
                <p>Blog</p>
                <h2>Our blog Packages</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogData />
    </main>
  );
};

export default Homestyle2;
