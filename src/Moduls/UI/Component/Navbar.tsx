import React from "react";
import iyclogo from "../../../Assets/Image/IYC_logo copy.png";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="container-fluid contactHead bg-custom1">
        <div className="row navmargin">
          <div className="col-6 p-2 d-flex align-items-center ">
            <span className="text-white"> Follow Us </span>
            <i className="bi bi-facebook  iconbtn me-1 ms-4"></i>
            <i className="bi bi-twitter-x iconbtn me-1"></i>
            <i className="bi bi-instagram iconbtn me-1"></i>
            <i className="bi bi-linkedin iconbtn me-1"></i>
            <i className="bi bi-youtube iconbtn me-1"></i>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center text-white">
          <span className="me-5"> <i className="bi bi-telephone"></i> +91 11 2335 2472</span>
          <span> <i className="bi bi-envelope-at"></i> +91 11 2335 2472</span>
          </div>
        </div>
      </div>
      {/* bg-body-tertiary */}
      <nav className="navbar shadow-lg navbar-expand-lg bg-white bg-light ">
        <div className="container-fluid navmargin">
          <a className="navbar-brand" href="#">
            <img src={iyclogo} alt="iyclogo" width="150" height="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  The IYC
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  OUR PRESIDENT
                </a>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  IYC LEADERSHIP
                </a>
                <ul className="dropdown-menu mt-lg-3  border-start-0 border-end-0 border-top-0 rounded-0 rounded-bottom-2">
                  <li>
                    <a className="dropdown-item">NATIONAL OFFICE BEARERS</a>
                  </li>
                  <li>
                    <a className="dropdown-item">NATIONAL EXCUTIVE MEMBERS</a>
                  </li>
                  <li>
                    <a className="dropdown-item">STATE OFFICE BEARERS</a>
                  </li>

                  {/* FAQ */}
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CONGRESS FAMILY
                </a>
                <ul className="dropdown-menu mt-lg-3 border-start-0 border-end-0 border-top-0 rounded-0 rounded-bottom-2">
                  <li>
                    <a className="dropdown-item">INC</a>
                  </li>
                  <li>
                    <a className="dropdown-item">AIMC</a>
                  </li>
                  <li>
                    <a className="dropdown-item">NSUI</a>
                  </li>
                  <li>
                    <a className="dropdown-item">INTUC</a>
                  </li>
                  <li>
                    <a className="dropdown-item">SEWADAL</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  RESOURCES
                </a>
                <ul className="dropdown-menu mt-lg-3  border-start-0 border-end-0 border-top-0 rounded-0 rounded-bottom-2">
                  <li>
                    <a className="dropdown-item">PHOTO GALLERY</a>
                  </li>
                  <li>
                    <a className="dropdown-item">VIDEO GALLERY</a>
                  </li>
                  <li>
                    <a className="dropdown-item">BLOGS</a>
                  </li>
                  <li>
                    <a className="dropdown-item">YOUNG INDIA LIVE SERIES</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <button className="btn btn-light">CONTRIBUTE</button>
            </span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
