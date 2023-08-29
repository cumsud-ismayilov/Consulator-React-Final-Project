import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../Register/Register.scss";
import Buttonitem from "../../components/ButtonComponent/Buttons";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length===0 || email.length===0 || password.length===0 || confirmpassword.length===0) {
      setError(true)
    }
    console.log(name, password);
  };

  return (
    <section id="register-page">
      <div class="register">
        <p>Sign In</p>
        <h2>Sign in to your account</h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Name</legend>
            <input type="text"  placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
            {
              error?<span>Enter your name</span>:""
            }
          </fieldset>

          <fieldset>
            <legend>E-mail</legend>
            <input type="text"  placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
            {
              error?<span>Enter your email</span>:""
            }
          </fieldset>

          <fieldset>
            <legend>Password</legend>
            <input type="text"  placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            {
              error?<span>Enter your password</span>:""
            }
          </fieldset>

          <fieldset>
            <legend>Password</legend>
            <input type="text"  placeholder="Confirm Password" onChange={(e) => setConfirmpassword(e.target.value)} />
            {
              error?<span>Enter your confirm-password</span>:""
            }
          </fieldset>
          <Buttonitem type="text" className="login-button" tittle="SIGN UP" />
        </form>

        <div className="login-social">
          <h5 className="face-bk">
            <BiLogoFacebook color="#fff" size="18px" />
          </h5>
          <h5 className="twitter">
            <BiLogoTwitter color="#fff" size="16px" />
          </h5>
          <h5 className="lnkedin">
            <FaLinkedinIn color="#fff" size="16px" />
          </h5>
        </div>
        <div className="nothelp">
          <h5 className="dont-account">Already have an account? </h5>
          <h5 className="toregister">
            <Link to="/login">Return to Sign In</Link>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Register;
