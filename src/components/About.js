import React from "react";
import "./About.css";
import explore from "./Resources/enjoy.png";
import signup from "./Resources/signup.png";
import login from "./Resources/login-bg.png";
function About() {
  return (
    <div className="parent_about">
      <div className="wrapper">
        <div className="container my-4">
          <h4 style={{color:'white'}}>Simple 3 steps to follow :-</h4>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={signup} alt="..." />
                <div className="carousel-caption d-md-block">
                  <h5>Sign Up</h5>
                  <p>Use email to Register as a new User.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={login}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-md-block">
                  <h5>Log in </h5>
                  <p>Simply Log in into your account.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={explore} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-md-block">
                  <h5>Store & Manage your Notes</h5>
                  <p>Enjoy the features.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1715364342">
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
      </div>
      <div className="wrapper2">
        <div className="features">
          <h3 className="my-3">Features:</h3>
          <ul>
            <li>Unlimited Access to Storage.</li>
            <li>Remote Storage allow you to access notes from anywhere.</li>
            <li>No loss of Notes,as it do not require hard-drive.</li>
            <li>Its Free for lifetime.</li>
            <li>Allow you to make changes to your Notes.</li>
            <li>Effective GUI make management of notes easy.</li>
            <li>Time and Date to changes is monitored</li>
            <li>Feature to provide Reminder after every 12 months will be provided in future.</li>
          </ul>

        </div>
        <div className="container">
          <div className=" contact_div">
            <h4>Contact us:</h4>
            <ul className="contact my-4">
              <a
                href="https://www.linkedin.com/in/uttam-nakade-54a852247"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fa-brands fa-linkedin-in fa-xl"
                  style={{ color: "#285095" }}
                ></i>
              </a>
              <a
                href="https://twitter.com/nakade_uttam"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fa-brands fa-x-twitter fa-xl"
                  style={{ color: "#0d0d0d" }}
                ></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100073788919787&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fa-brands fa-facebook fa-xl"
                  style={{ color: "#2e6cd6" }}
                ></i>
              </a>
              <a
                href="https://www.instagram.com/nakadeuttam96?igsh=MWk4Y2R3Z3Q3eGZwNw=="
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fa-brands fa-instagram fa-xl"
                  style={{ color: "#de6bf5" }}
                ></i>
              </a>
              <a href="https://telegram.org/" target="_blank" rel="noreferrer">
                <i
                  className="fa-brands fa-telegram fa-xl"
                  style={{ color: "#527dc7" }}
                ></i>
              </a>
            </ul>
          </div>
          <div className="moreTools">
            <h4 className="mx-5">More Tools:</h4>
            <ul>
              <li>
                <a href="https://my-book-on-cloud.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a>
              </li>
              <li>
                <a href="https://my-book-on-cloud.netlify.app/" target="_blank" rel="noreferrer">NewsApp</a>
              </li>
              <li>
                <a href="https://nakadeuttam.github.io/my-react-app/" target="_blank" rel="noreferrer">TextUtils</a>
              </li>
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
      </div>
    </div>
  );
}

export default About;
