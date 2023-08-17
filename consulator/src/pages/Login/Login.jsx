import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import "../Login/Login.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Buttonitem from "../../components/ButtonComponent/Buttons"
import { BiLogoFacebook,BiLogoTwitter} from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
const Login = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const notify = () => toast.success("You successfully Login on Consultar !");
  return (
    <section id="login-page">
      <div class="login">
      <p>Sign In</p>
      <h2>Sign in to your account</h2>
      <Box>
        <TextField fullWidth
          id="outlined-read-only-input"
          label="E-mail"
          defaultValue="user@gmail.com"
          InputProps={{
            readOnly: false,
          }}
        />
        <TextField fullWidth 
          id="outlined-read-only-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          defaultValue="123456"
          className="passwordinputs"
          InputProps={{
            readOnly: false,
          }}
        />
      </Box>
      <div className="checkedandpassword">
        <div className="checked-icons">
          <Checkbox
            {...label}
            unChecked
            className="checked-box"
            
            sx={{
             
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <h3>Remember Me</h3>
        </div>
        <h4 className="forgot-password"><Link>Forgot Password?</Link></h4>
      </div>
      <Buttonitem type="text" className="login-button" onClick={notify} tittle="login" />
      <ToastContainer theme="colored" />
      <div className="login-social">
         <h5 className="face-bk" ><BiLogoFacebook color="#fff" size="18px"/></h5>
         <h5 className="twitter" ><BiLogoTwitter color="#fff" size="16px"/></h5>
         <h5 className="lnkedin" ><FaLinkedinIn color="#fff" size="16px"/></h5>
      </div>
      <div className="nothelp" >
        <h5 className="dont-account">Don't have an account? </h5>
        <h5 className="toregister"><Link to="/register">Create free account</Link></h5>
      </div>
    </div>
    </section>
  );
};

export default Login;
