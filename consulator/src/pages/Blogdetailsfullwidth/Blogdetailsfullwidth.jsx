import React from "react";
import { Link } from "react-router-dom";
import "../Blogdetailsfullwidth/Blogdetailsfullwidth.scss";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  
  BiUser,
  BiSolidQuoteLeft,
} from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";
import { LuMessageCircle } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import CommentsCards from "../../components/CommentItem/CommentItem";
import Buttons from "../../components/ButtonComponent/Buttons";
import BreadCumbArea from "../../components/BreadCumbArea/BreadCumbArea";
const Blogdetailsfullwidth = () => {
  return (
    <main>
<BreadCumbArea header="Latest News" tittle1="Home /" tittle2="Blog" />
      <section id="blogdetailsfullwidth2">
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
                  <li className="user">
                    <BiUser />
                    By<Link to="/blogdetailsrightsidebar">
                      Jenny Watson
                    </Link>{" "}
                    <TbPointFilled color="#3757f7" />
                  </li>
                  <li className="comments">
                    <LuMessageCircle /> Comments 35{" "}
                    <TbPointFilled color="#3757f7" />
                  </li>
                  <li className="comments">
                    <IoCalendarOutline /> 24 Jun 2021
                  </li>
                </ul>
              </div>
              <div className="entry-details">
                <h1>
                  <Link to="/blogdetailsrightsidebar">
                    Underestimating the challenge of raising Series A funding
                  </Link>
                </h1>
                <h2>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful.
                </h2>
              </div>
              <div className="blockquote">
                <p className="blockquote-tittle">
                  Combined with a handful of model sentence structures, generate
                  Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
                  is therefore always free from repetition, injected humour, or
                  non-characteristic words etc.
                </p>
                <h3 className="quote-icon">
                  <BiSolidQuoteLeft color="#3757f7" />
                </h3>
              </div>
              <p className="explain-text">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
              </p>
              <div className="blog-gallery">
                <img
                  src="http://consultar-react.wpocean.com/static/media/img-3.7e828bc3.jpg"
                  alt="gallery"
                />
                <img
                  src="	http://consultar-react.wpocean.com/static/media/img-2.c4097266.jpg"
                  alt="gallery"
                />
              </div>
              <div className="tag-share-s2">
                <span>Share:</span>
                <ul className="plan-ul">
                  <li className="plan-li">Planning</li>
                  <li className="plan-li">Business</li>
                  <li className="plan-li">Consulting</li>
                </ul>
              </div>
              <div className="tag-share-s3">
                <span>Share:</span>
                <ul className="plan-ul1">
                  <li className="plan-li1">facebook</li>
                  <li className="plan-li1">twitter</li>
                  <li className="plan-li1">linkedin</li>
                  <li className="plan-li1">pinterest</li>
                </ul>
              </div>
              <div className="author-box">
                <img
                  src="	http://consultar-react.wpocean.com/static/media/author.f26d278e.jpg"
                  alt="avatar"
                />
                <div className="author-text">
                  <p>Author: Jenny Watson</p>
                  <h6>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </h6>
                  <div className="author-social">
                    <BiLogoFacebook />
                    <BiLogoTwitter />
                    <BiLogoLinkedin />
                    <AiOutlineInstagram />
                  </div>
                </div>
              </div>
              <div className="more-post2">
                <div className="previos-text">
                  <h3>
                    <Link to="/blogrightsidebar">
                      <BsArrowLeft size="20px" />
                      Previous Post
                    </Link>
                  </h3>
                  <h4>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium.
                  </h4>
                </div>
                <div className="next-text">
                  <h3>
                    <Link to="/blogleftsidebar">
                      <BsArrowRight size="20px" />
                      Next Post
                    </Link>
                  </h3>
                  <h4>
                    Dignissimos ducimus qui blanditiis praesentiu deleniti atque
                    corrupti quos dolores
                  </h4>
                </div>
              </div>
              <h3 className="comments-text">
                Comments
              </h3>
              <CommentsCards/>
              <div className="comment-respond">
                <h4 className="post-comments">Post Comments</h4>
                <form>
                  <textarea name="" id="comments-text2" className="comments-text2" cols="30" rows="10" placeholder="Write Your Comments..."></textarea>
                  <div className="website-and-name">
                    <input type="url" placeholder="Website" className="website-input" id="website-input" />
                    <input type="text" name="namess" id="namess" placeholder="Name" className="namess"/>
                  </div>
                  <input type="email" className="emaill" id="emaill" placeholder="Email" name="email" />
                </form>
                <Buttons type="text" tittle="Post comments" className="posted" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogdetailsfullwidth;
