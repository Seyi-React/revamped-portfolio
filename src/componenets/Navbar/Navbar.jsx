import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose, AiFillHome, AiFillContacts } from "react-icons/ai";
import { FcAbout, FcServices } from "react-icons/fc";
import { BsFillPersonFill } from "react-icons/bs";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="header">
      <div className="container">
        <nav>
          <h1>Portfolio</h1>
          <ul>
            <li>
              <a href="#section">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <p className="hamb">
            {" "}
            <RiMenu2Fill
              size={28}
              onClick={() => {
                setOpen(true);
              }}
            />
          </p>
          {open && (
            <div className="nav-open">
              <p className="close">
                <AiOutlineClose
                  size={28}
                  onClick={() => setOpen(false)}
                  color="black"
                />
              </p>
              <div className="nav-child">
                <a href="#section">
                  {" "}
                  <AiFillHome
                    style={{ marginRight: "10px", marginTop: "5px" }}
                  />
                  Home
                </a>
                <a href="#about">
                  {" "}
                  <FcAbout style={{ marginRight: "10px", marginTop: "5px" }} />
                  About
                </a>
                <a href="#skill">
                  {" "}
                  <FcServices
                    style={{ marginRight: "10px", marginTop: "5px" }}
                  />
                  Skill
                </a>
                <a href="#portfolio">
                  <BsFillPersonFill
                    style={{ marginRight: "10px", marginTop: "5px" }}
                  />
                  Portfolio
                </a>
                <a href="#contact">
                  {" "}
                  <AiFillContacts
                    style={{ marginRight: "10px", marginTop: "5px" }}
                  />
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
