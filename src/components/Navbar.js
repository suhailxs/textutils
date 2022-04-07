import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          TextUtils
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
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button disabled={props.mode=='dark'?true:false} className="btn-dark rounded mx-2"  onClick={()=>props.toggleMode('dark')} style={{backgroundColor : 'primary',height:'30px',width:'30px', border:'.5px solid #212529'}}></button>
            <button disabled={props.mode=='light'?true:false} className="btn-light rounded mx-2"  onClick={()=>props.toggleMode('light')} style={{backgroundColor : 'primary',height:'30px',width:'30px',border:'.5px solid white'}}></button>
          </div>
        {/* <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable {props.mode === "light" ? "dark" : "light"} Mode
          </label>
        </div> */}
        </div>
        
      </div>
    </nav>
  );
}

// props here
Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "title",
};
