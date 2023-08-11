import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { useLocation } from "react-router-dom";
import BannerNavbar from "./Navbar/BannerNavbar"
const Layout = ({children}) => {
  const location = useLocation();
  return (
    <div>
      {
        location.pathname==="/"|| location.pathname==="/page"|| location.pathname==="/blogdetails"?
        <Navbar/>:<BannerNavbar/>
      }
      <div>{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout
