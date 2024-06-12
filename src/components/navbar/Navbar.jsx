import "./navbar.scss"
import Logo from "./logo.png"
import Menu from "./menu64.png"
import { useState } from "react";


function Navbar(){
  const [showMenu,setShowMenu]=useState(false)
    return (
      <nav>
        <div className="left">
          <a href="/" className="logo">
              <img src={Logo} alt="" />
          </a>
          <a href="/">
              Home
          </a><a href="/">
              About us
          </a><a href="/">
              Contact
          </a>
          
        </div>
        <div className="right">
          <a href="/">
              Sign In
          </a>
          <a href="/">
              Sign Up
          </a>

          <div className="menuIcon">
            <img src={Menu} alt=""  onClick={()=>setShowMenu((prev)=>!prev)} />
          </div>

          <div className={showMenu ? "menu active" : "menu"}  onClick={()=>setShowMenu(false)}>
            <div>
              Home
            </div>
            <div>
              About
            </div>
            <div>
              Contact
            </div>
            <div>
              Sign In
            </div>
            <div>
              Sign Up
            </div>
         
          </div>
        </div>

      </nav>
    )
}

export default Navbar;