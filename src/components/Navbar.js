import * as React from "react";
import { Link ,useLocation ,useNavigate} from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  let location = useLocation();
  React.useEffect(() => {
    console.log(location);
  }, [location]);
  const navigate = useNavigate();

  //Logged out function
  const handleLoggedOut=()=>{
    
    localStorage.removeItem('token');
    navigate('/login');
  }
  const NAV_style = { backgroundColor: "#253a59"
  };
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg" style={NAV_style}>
        <div className="container-fluid">

        <Link
            className={` navbar-brand ${
              location.pathname === "/" ? "active font-weight-bold" : ""
            }`}
            to="/"
          >
          Home
          </Link>
          <Link
            className={` home-icon ${
              location.pathname === "/" ? "active font-weight-bold" : ""
            }`}
            to="/"
          >
          <i className="fa-solid fa-house-user"></i>
          </Link>
          <Link
            className={` navbar-brand ${
              location.pathname === "/home" ? "active font-weight-bold" : ""
            }`}
            to="/home"
          >
            My_Book
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link  icon-link icon-link ${
                    location.pathname === "/about"
                      ? "active font-weight-bold"
                      : ""
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
                  {(!localStorage.getItem('token'))? <div className="d-flex resp-log">
                  <Link
                className={`login mx-2 nav-link ${
                  location.pathname === "/login"
                    ? "active font-weight-bold"
                    : ""
                }`}
                to="/login"
              >
               
                Login
              </Link>
              <Link
                className={`mx-3 signup nav-link ${
                  location.pathname === "/signup"
                    ? "active font-weight-bold"
                    : ""
                }`}
                to="/signup"
              >
                Sign Up
              </Link>
                  </div> : <button className={`login mx-2 nav-link ${
                  location.pathname === "/login"
                    ? "active font-weight-bold"
                    : ""
                }`} onClick={handleLoggedOut}><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
