import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar text-light navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              props.mode === "info" ? "dark" : "light"
            } `}
            to="/"
          >
            {props.title}
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
                  className={`nav-link active text-${
                    props.mode === "info" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.mode === "info" ? "dark" : "light"
                  }`}
                  to="/users"
                >
                  About-us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle text-${
                    props.mode === "info" ? "dark" : "light"
                  }`}
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Program
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item  " to="/aboutt">
                      {props.abouttext}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item  " to="/aboutdev">
                      About Developer
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item  " to="/more">
                      More
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link text-${
                    props.mode === "info" ? "dark" : "light"
                  }`}
                >
                  Contact-us
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button to="/" className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
            <div
              className={`form-check form-switch text-${
                props.mode === "info" ? "dark" : "light"
              } mx-2`}
            >
              <input
                className="form-check-input mx-1"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label mx-  "
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Darkmode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
