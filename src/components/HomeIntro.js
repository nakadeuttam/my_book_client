import React from "react";
import backgr from "./Resources/cloud_comm_img.jpg";
import privacy_img from "./Resources/pri_img.png";

import "./Hero.css";
function HomeIntro() {
  return (
    <div className="parent">
      <section className="wrapper">
        <div className="content">
          <div className="head_div">
            <h2 style={{ color: "white" }}>Welcome to myNotes !!!</h2>
            <div className="description">
              Securely Store your notes and Thaughts on cloud...
            </div>
            <div className="desc2">Your Security is our first priority.</div>
          </div>
          <div className="img_div">
            <img className="cloud_img" src={backgr} alt="" />
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1714848548">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="wrapper2">
        <div className="nav">
          <div className="privacy_img_div">
            <img className="privacy_img" src={privacy_img} alt="" />
           
          </div>
          <div className="privacy_desc">
            <h3 className="font-effect-3d">Your Notes are safe on cloud ..</h3>
            <p>Just Use and Enjoy the features</p>
          </div>
        </div>
        <div className="container">
          <div className=" contact_div">
            <h4 >Contact us:</h4>
            <ul className="contact my-4">
            <a href="https://www.linkedin.com/in/uttam-nakade-54a852247" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in fa-xl" style={{color: "#285095"}}></i></a>
            <a href="https://twitter.com/nakade_uttam" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter fa-xl" style={{color: "#0d0d0d"}}></i></a>
            <a href="https://www.facebook.com/profile.php?id=100073788919787&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook fa-xl" style={{color: "#2e6cd6"}}></i></a>
            <a href="https://www.instagram.com/nakadeuttam96?igsh=MWk4Y2R3Z3Q3eGZwNw==" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram fa-xl" style={{color: "#de6bf5"}}></i></a>
            <a href="http://t.me/nakadeuttam" target="_blank" rel="noreferrer"><i className="fa-brands fa-telegram fa-xl" style={{color: "#527dc7"}}></i></a>
            </ul>
          </div>
          <div className="moreTools">
            <h4 className="mx-5">More Tools:</h4>
          <ul>
            <li><a href="https://nakadeuttam.github.io/my-react-app/" target="_blank" rel="noreferrer">Portfolio</a></li>
            <li><a href="https://nakadeuttam.github.io/my-react-app/" target="_blank" rel="noreferrer">NewsApp</a></li>
            <li><a href="https://nakadeuttam.github.io/my-react-app/" target="_blank" rel="noreferrer">TextUtils</a></li>
            </ul>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1715093529">
        
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
        
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
          
        </div>
        
      </section>
    </div>
  );
}

export default HomeIntro;
