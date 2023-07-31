import React from "react";
import "./portfolio.css";
import { AiFillGithub, AiOutlineFolderView } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div>
        <div className="img"></div>
        <div className="show">
          <a href="https://github.com/Seyi-React/gpt-3">
            <AiFillGithub size={27}  color="white"  className="k"/>
          </a>
          <a href="https://lovely-chatai.netlify.app">
            <AiOutlineFolderView size={27}  color="white" className="k" />
          </a>
        </div>
        <div className="img-ii"></div>
        <div className="show">
          <a href="https://github.com/Seyi-React/geric">
            <AiFillGithub  size={27}  color="white" className="k" />
          </a>
          <a href="https://geric.netlify.app">
            <AiOutlineFolderView  size={27}  color="white" className="k" />
          </a>
        </div>
        <div className="img-iii"></div>
        <div className="show">
          <a href="https://github.com/Seyi-React/appastore">
            <AiFillGithub size={27}   color="white" className="k" />
          </a>
          <a href="https://delivstore.netlify.app">
            <AiOutlineFolderView size={27}    color="white" className="k"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
