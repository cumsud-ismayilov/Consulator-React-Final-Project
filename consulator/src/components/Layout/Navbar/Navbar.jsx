import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
     <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">Home</Link></li>
      <li><Link to="/projects">Home</Link></li>
      <li><Link to="/services">Home</Link></li>
      <li><Link to="/blog">Home</Link></li>
      <li><Link to="/page">Home</Link></li>
      <li><Link to="/contact">Home</Link></li>
     </ul>
    </nav>
  )
}

export default Navbar
