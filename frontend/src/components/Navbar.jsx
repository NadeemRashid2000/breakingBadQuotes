import React, { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { FaBars, FaTimes  } from "react-icons/fa";
import './Navbar.css';

const Navbar = ({forwardedRef}) => {
  const [click, setClick ] = useState(false); // For toggling Menu
  const [color, setColor ] = useState(false); // For changing header background on scroll
  const navigate = useNavigate();


  //Toggle Hamburger Menu
  const handleClick  = () => setClick(!click);


  // change navbar background when scrolling 
  // const changeColor = () => {
  //   if(window.scrollY >=  1) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  const changeColor = () => {
    setColor(window.scrollY >= 1);
  };
  

  // Navigate home and reload
  const handleLogoClick = () => {
    navigate("/", {replace: true});
    window.scrollTo(0,0);
    // Use setTimeout with 0 delay to defer reload until after navigation and scroll are complete

    setTimeout( ()=> {
      window.location.reload();
    }, 0);
  };


  // Add scroll listener on mount
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);


  return(
    <div className = {color ? "header header-bg" : "header"} ref={forwardedRef}>

      <div onClick={handleLogoClick} style={{cursor: "pointer"}}>
        <img className= "logo" src="images/logo.png" alt="logo" />
      </div>

      {/* Navigation links */}
      <ul className={click ? "nav-bar active" : "nav-bar"}>
        <li> <Link to="/documentation"> Documentation</Link> </li>
        <li> <Link to="/demo"> Demo </Link> </li>
        <li> <Link to="/about"> About </Link> </li>
      </ul>

      {/* Hamburger Icon */}
      <div  className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size = {20} />: <FaBars size={20}/>}
      </div>

    </div>
  );


};

export default Navbar;
