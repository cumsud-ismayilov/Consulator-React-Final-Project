import React   from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../Register/Register.scss";
import Buttonitem from "../../components/ButtonComponent/Buttons";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
const Register = () => {
  const notify = () => toast.error("Empty field is not allowed!");



  return (
    <section id="register-page">
      <div class="register">
        <p>Sign In</p>
        <h2>Sign in to your account</h2>
        <Box>
          <TextField
            fullWidth
            id="outlined-read-only-input"
            label="Name"
            name="username"
            defaultValue="Full Name"
            InputProps={{
              readOnly: false,
            }}
           
          />
          <TextField
            fullWidth
            id="outlined-read-only-input"
            label="E-mail"
            name="emaiils"
            defaultValue="E-mail"
            className="passwordinputs"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            fullWidth
            id="outlined-read-only-input"
            label="Password"
            name="password"
            defaultValue="Password"
            className="passwordinputs"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            fullWidth
            id="outlined-read-only-input"
            label="Confirm Password"
            name="confirmpassword"
            defaultValue="Confirm Password"
            className="passwordinputs"
            InputProps={{
              readOnly: false,
            }}
          />
        </Box>

        <Buttonitem
          type="text"
          className="login-button"
          tittle="SIGN UP"
          onClick={notify}
        />
        <ToastContainer />
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
