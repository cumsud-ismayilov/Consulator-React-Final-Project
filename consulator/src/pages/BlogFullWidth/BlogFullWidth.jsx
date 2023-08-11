import React from "react";
import { Link } from "react-router-dom";
import "../BlogFullWidth/BlogFullWidth.scss";
import {

  BiUser
} from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";
import { LuMessageCircle } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";

const BlogFullWidth = () => {
  return (
    <main>
        <section id="blog-page2">
        <div className="back-img">
          <div className="breadcumb-text">
            <p>Latest News</p>
            <ul className="pricing-ul">
              <li className="pricing-li1">
                <Link to="/">Home /</Link>
              </li>
              <li className="pricing-li2">Blog</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="blogfullwidth">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
            <div className="format-standart-img">
                <img
                  src="	http://consultar-react.wpocean.com/static/media/img-4.cfbfa03d.jpg"
                  alt="format-img"
                />
              </div>
              <div className="entry-meta">
                <ul>
                  <li className="user"><BiUser/>By<Link to="/blogdetailsrightsidebar">Jenny Watson</Link> <TbPointFilled color="#3757f7"/></li>
                  <li className="comments"><LuMessageCircle/> Comments 35 <TbPointFilled color="#3757f7"/></li>
                  <li className="comments"><IoCalendarOutline/> 24 Jun 2021</li>
                </ul>
              </div>
              <div className="entry-details">
                <h1><Link to="/blogdetailsrightsidebar">8 Mistakes Founders Make When Starting a Business.</Link></h1>
                <h2>Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</h2>
                <h3><Link to="/blogdetailsrightsidebar">READ MORE...</Link></h3>
              </div>
              <div className="format-standart">
              <div className="entry-meta">
                <ul>
                  <li className="user"><BiUser/>By<Link to="/blogdetailsrightsidebar">Jenny Watson</Link> <TbPointFilled color="#3757f7"/></li>
                  <li className="comments"><LuMessageCircle/> Comments 35 <TbPointFilled color="#3757f7"/></li>
                  <li className="comments"><IoCalendarOutline/> 24 Jun 2021</li>
                </ul>
              </div>
              <div className="entry-details">
                <h1><Link to="/blogdetailsrightsidebar">Tips From Successful Small Business Owners</Link></h1>
                <h2>Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</h2>
                <h3><Link to="/blogdetailsrightsidebar">READ MORE...</Link></h3>
              </div>
              </div>
              <div className="postslider-img">
                <img src="http://consultar-react.wpocean.com/static/media/img-5.0140b22c.jpg" alt="img" />
              </div>
              <div className="entry-meta">
                <ul>
                  <li className="user"><BiUser/>By<Link to="/blogdetailsrightsidebar">Jenny Watson</Link> <TbPointFilled color="#3757f7"/></li>
                  <li className="comments"><LuMessageCircle/> Comments 35 <TbPointFilled color="#3757f7"/></li>
                  <li className="comments"><IoCalendarOutline/> 24 Jun 2021</li>
                </ul>
              </div>
              <div className="entry-details">
                <h1><Link to="/blogdetailsrighttsidebar">Worst Ways Small Businesses Waste Money on Marketing</Link></h1>
                <h2>Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</h2>
                <h3><Link to="/blogdetailsrightsidebar">READ MORE...</Link></h3>
              </div>
              <div className="format-video">
                <img src="http://consultar-react.wpocean.com/static/media/img-6.a0329f56.jpg" alt="format-video" />
               <div className="play-video">
                  <h5><BsFillPlayFill color="#0d6efd" size="35"/></h5>
               </div>
              </div>
              <div className="entry-meta">
                <ul>
                  <li className="user"><BiUser/>By<Link to="/blogdetailsrightsidebar">Jenny Watson</Link> <TbPointFilled color="#3757f7"/></li>
                  <li className="comments"><LuMessageCircle/> Comments 35 <TbPointFilled color="#3757f7"/></li>
                  <li className="comments"><IoCalendarOutline/> 24 Jun 2021</li>
                </ul>
              </div>
              <div className="entry-details">
                <h1><Link to="/blogdetailsrightsidebar">Why Choose Management Consulting?</Link></h1>
                <h2>Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</h2>
                <h3><Link to="/">READ MORE...</Link></h3>
              </div>
              <div className="blog-pagination">
                <h6 className="pagination1"><Link to="/blogleftsidebar"><AiOutlineLeft size="21"/></Link></h6>
                <h6 className="pagination2"><Link to="/blogleftsidebar">1</Link></h6>
                <h6 className="pagination1"><Link to="/blogleftsidebar">2</Link></h6>
                <h6 className="pagination1"><Link to="/blogleftsidebar">3</Link></h6>
                <h6 className="pagination1"><Link to="/blogleftsidebar"><AiOutlineRight size="21"/></Link></h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogFullWidth
