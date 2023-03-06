import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ title, about, mode, toggle }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} text-${mode === 'dark' ? 'white' : 'white'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contacts
              </a>
            </li>
            {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
            {/* <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" style={{ color: mode === "dark" ? "white" : "white", borderColor: mode === "dark" ? "white" : "#0d6efd !important"}} type="submit">
              Search
            </button>
          </form>
          <div className="form-check form-switch">
            <input
              className="form-check-input mx-1"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggle}
            />
            <label
              className={`form-check-label`}
              htmlFor="flexSwitchCheckDefault"
            >Enable Dark  Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

/* Navbar.defaultProps = {
    title: "Put Title Here",
    about: "Put About Here"
}
 */