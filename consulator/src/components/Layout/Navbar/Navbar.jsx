import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.scss";
import Buttons from "../../ButtonComponent/Buttons";
import { GoSearch, GoChevronRight } from "react-icons/go";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import NavAccordion from "../../NavAccordion/NavAccordion";
const Navbar = () => {
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 90) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  const [isItemVisible, setIsItemVisible] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [hideButton, setHideButton] = useState(false);
  const showItem = () => {
    setIsItemVisible(true);
    setShowButton(false);
    setHideButton(true);
  };

  const hideItem = () => {
    setIsItemVisible(false);
    setShowButton(true);
    setHideButton(false);
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const faqList = [
    {
      id: 0,
      label: "Home",
      renderContent: () => (
        <ul>
          <li>
            <Link to="/homestyle1">Home Style 1</Link>
          </li>
          <li>
            <Link to="/homestyle2">Home Style 2</Link>
          </li>
          <li>
            <Link to="/homestyle3">Home Style 3</Link>
          </li>
        </ul>
      ),
    },
  
    {
      id: 2,
      label: "Services",
      renderContent: () => (
        <ul>
         <li><Link to="/service">Service</Link></li>
         <li><Link to="/servicesstyle2">Services Style 2</Link></li>
         <li><Link to="/servicessingle">Service Single</Link></li>
        </ul>
      ),
    },
    {
      id: 3,
      label: "Projects",
      renderContent: () => (
        <ul>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/projectstyle2">Projects Style 2</Link>
          </li>
          <li>
            <Link to="/projectsingle">Projects Single</Link>
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      label: "Pages",
      renderContent: () => (
        <ul>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/testimional">Testimonial</Link>
          </li>
          <li>
            <Link to="/error404">Error 404</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      ),
    },
    {
      id: 5,
      label: "Blog",
      renderContent: () => (
        <ul>
          <li>
            <Link to='/blogrightsidebar'>Blog Right SideBar</Link>
          </li>
          <li>
            <Link to="/blogleftsidebar">Blog Left SideBar</Link>
          </li>
          <li>
            <Link to='/blogfullwidth'>Blog Full Width</Link>
          </li>
          <li>
            <Link to="/blogdetailsrightsidebar">Blog Details Right SideBar</Link>
          </li>
          <li>
            <Link to="/blogdetailsleftsidebar">Blog Details Left SideBar</Link>
          </li>
          <li>
            <Link to="/blogdetailsfullwidth">Blog Details Full Width</Link>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div>
      <nav className={fix ? "desktop-nav actice-nav" : "desktop-nav"}>
        <div className="container">
          <div className="row g-3 align-items-center justify-content-center">
            <div className="col-xl-3">
              <div className="site-logo">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAqCAYAAAD21BQXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NjFlNThlYi05MTMxLTVmNDItOTgzOC00MGJjMmNmYWEzY2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkM5RjYwODI5MjQ0MTFFQkI5OTNBOTVBMENDQkNGQzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkM5RjYwODE5MjQ0MTFFQkI5OTNBOTVBMENDQkNGQzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTIwNmU4OWUtYWYxOS00YTRlLTg4YWUtMzdiZWE1ZTk1NWExIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhhNmZiM2YtYmY3Yy00ODRkLWFiODEt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"
                  alt="sitelogo"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <ul className="navmiddle">
                <li className="home">
                  <Link className="home-li" to="/">
                    Home
                    <ul className="home-hover">
                      <li>
                        <Link className="hover-li6" to="/homestyle1">
                          Home style 1
                        </Link>
                      </li>
                      <li>
                        <Link className="hover-li6" to="/homestyle2">
                          Home style 2
                        </Link>
                      </li>
                      <li>
                        <Link className="hover-li6" to="/homestyle3">
                          Home style 3
                        </Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li className="about">
                  <Link to="/about">About</Link>
                </li>
                <li className="services">
                  <Link className="service-li" to="/services">
                    Services
                    <ul className="service-hover">
                      <li>
                        <Link className="hover-li2" to="/service">
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link className="hover-li2" to="/servicestyle2">
                          Service Style 2
                        </Link>
                      </li>
                      <li>
                        <Link className="hover-li2" to="/servicesingle">
                          Service Single
                        </Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li className="projects">
                  <Link className="project-li" to="/projects">
                    Projects
                    <ul className="project-hover">
                      <li>
                        <Link className="hover-li1" to="/project">
                          Project
                        </Link>
                      </li>
                      <li>
                        <Link className="hover-li1" to="/projectstyle2">
                          Project Style 2
                        </Link>
                      </li>
                      <li>
                        <Link className="hover-li1" to="/projectsingle">
                          Project Single
                        </Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li className="pages">
                  <Link className="page-li" to="/page">
                    Pages
                    <ul className="page-hover">
                      <li>
                        <Link className="hover-li" to="/pricing">
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link className="hover-li" to="/testimional">
                          Testimional
                        </Link>
                      </li>
                      <li>
                        <Link className="hover-li" to="/error404">
                          Error404
                        </Link>
                      </li>
                      <li>
                        <Link className="hover-li" to="/login">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link className="hover-li" to="/register">
                          Register
                        </Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li className="blog">
                  <Link className="blog-li" to="/blog">
                    Blog
                    <ul className="blog-hover">
                      <li className="hover-li3">
                        <Link className="hover-a3" to="/blogrightsidebar">
                          Blog right sidebar
                        </Link>
                      </li>
                      <li className="hover-li3">
                        <Link className="hover-a3" to="/blogleftsidebar">
                          Blog left sidebar
                        </Link>
                      </li>
                      <li className="hover-li3">
                        <Link className="hover-a3" to="/blogfullwidth">
                          Blog fullwidth
                        </Link>
                      </li>
                      <li className="hover-li4">
                        <Link className="hover-a4" to="/blogdetails">
                          Blog details <GoChevronRight />
                          <ul className="blog-hover2">
                            <li className="hover-li5">
                              <Link
                                to="/blogdetailsrightsidebar"
                                className="hover-a5"
                              >
                                Blog details right sidebar
                              </Link>
                            </li>
                            <li className="hover-li5">
                              <Link
                                to="/blogdetailsleftsidebar"
                                className="hover-a5"
                              >
                                Blog details left sidebar
                              </Link>
                            </li>
                            <li className="hover-li5">
                              <Link
                                to="/blogdetailsfullwidth"
                                className="hover-a5"
                              >
                                {" "}
                                Blog details fullwidth
                              </Link>
                            </li>
                          </ul>
                        </Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li className="contact">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-3">
              <div className="site-right">
                <Buttons
                  type="text"
                  tittle="Free Consulting"
                  className="consulting"
                />
                <p className="search">
                  {showButton && (
                    <GoSearch
                      onClick={showItem}
                      size={20}
                      className="opensearch"
                    />
                  )}
                  {hideButton && (
                    <AiOutlineClose
                      onClick={hideItem}
                      size={20}
                      className="closesearch"
                    />
                  )}
                  {isItemVisible && (
                    <div className="search-bar">
                      <form>
                        <input
                          type="search"
                          name="search"
                          id="searchs"
                          className="searchs"
                          placeholder="Search here..."
                        />
                        
                        <AiOutlineSearch className="gosearch" size="23px" />
                      </form>
                    </div>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="mobile-nav">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="mobilenav-item">
                <div className="navbar">
                  <div className="navbar-button">
                    <Link to="#" className="menu-bars">
                      <FaBars color="#fff" size="20px" onClick={showSidebar} />
                    </Link>
                  </div>
                  <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                      <li className="navbar-toggle" onClick={showSidebar}>
                        <Link to="#" className="menu-bars">
                          <IoCloseOutline color="#fff" size="20px" />
                        </Link>
                      </li>
                      <NavAccordion items={faqList} keepOthersOpen={false} />
                      <li className="about-and-contact"><Link to='/about'>About</Link></li>
                      <li className="about-and-contact"><Link to='/contact'>Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mobilenav-img">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAqCAYAAAD21BQXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NjFlNThlYi05MTMxLTVmNDItOTgzOC00MGJjMmNmYWEzY2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkM5RjYwODI5MjQ0MTFFQkI5OTNBOTVBMENDQkNGQzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkM5RjYwODE5MjQ0MTFFQkI5OTNBOTVBMENDQkNGQzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTIwNmU4OWUtYWYxOS00YTRlLTg4YWUtMzdiZWE1ZTk1NWExIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhhNmZiM2YtYmY3Yy00ODRkLWFiODEt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"
                    alt="img"
                  />
                </div>
                <p className="search">
                  {showButton && (
                    <GoSearch
                      onClick={showItem}
                      size={20}
                      className="opensearch"
                    />
                  )}
                  {hideButton && (
                    <AiOutlineClose
                      onClick={hideItem}
                      size={20}
                      className="closesearch"
                    />
                  )}
                  {isItemVisible && (
                    <div className="search-bar">
                      <form>
                        <input
                          type="search"
                          name="search"
                          id="searchs"
                          className="searchs"
                          placeholder="Search here..."
                        />
                        
                        <AiOutlineSearch className="gosearch" size="23px" />
                      </form>
                    </div>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
