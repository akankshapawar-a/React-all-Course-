import React from 'react';
import {Link , NavLink} from "react-router-dom";
function Header() {
  
  
 const navLinkStyle=({isActive}) =>{
    return {
      textDecoragtion : isActive ? "none" : "underline",
      color:isActive ? "red":"white",
      fontSize:"25px"
 };
  }
  
  
  
  return (

    <div className='container'>
     <NavLink style={navLinkStyle}to={'/'}> Home </NavLink>
     <NavLink style={navLinkStyle} to={'/about'}> About</NavLink>
 

    </div>
  )
}

export default Header
