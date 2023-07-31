import React from "react";
import "./contact.css";
import { AiFillMail, AiFillGithub, AiFillLinkedin,AiFillHeart } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { useForm, ValidationError } from '@formspree/react';
import {toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mpzgqzyn");
  if (state.succeeded) {
    toast.success('Message sent successfully!', {
       position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "#ff004f",
    });
  }

  
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="flex">
        <div className="info">
          <div className="info-d">
            <span>
              <AiFillMail color="#ff004f" />
            </span>
            <span>oluwaseyiadeoti825@gmail.com</span>
          </div>
          <div className="info-d">
            <span>
              <MdCall color="#ff004f" />
            </span>
            <span>09079036407</span>
          </div>
          <div className="info-d-2">
            <a href="https://www.linkedin.com/in/oluwaseyi-adeoti-35b88925a/">
              <AiFillLinkedin size={25} color="white" />
            </a>
            <a href="https://github.com/Seyi-React">
              <AiFillGithub size={25} color="white" />
            </a>
          </div>
          <div className="button-div">
            <a href="src/assets/my-react-resume.pdf" download>
              <button>Download Cv</button>
            </a>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
           
            <input id="email" type="email" name="email" placeholder="Your email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea id="message" name="message"  placeholder="Your Message"/>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
      </div>
       <div className="footer">
           <span>Made with <AiFillHeart color="#ff004f"/> by Oluwaseyi.</span>
       </div>
    </div>
  );
};

export default Contact;
