import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBarAv extends Component {
  render() {
    return (
      <div>
    <link href="assets/css/style.css" rel="stylesheet" />  
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
          <div className="container">
            <a className="navbar-brand" href="accueil.html">
              <img id="logo" src="assets/img/logo_c.png" />
            </a>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/"><b>
                    <a className="nav-link" href="accueil.html">
                      Accueil
                    </a></b>
                  </Link>
                </li>
                <li className="nav-item"><b>
                  <a className="nav-link" href="#services">
                    Services
                  </a></b>
                </li>
                <li className="nav-item"><b>
                  <a className="nav-link" href="#contact">
                    Contact
                  </a></b>
                </li>
              </ul>
              <span className="navbar-text actions">
                {" "}
                <Link to="/Inscription">
                  <a className="login" href="">
                    Inscription
                  </a>
                </Link>
                <Link to="/Connexion">
                  <a
                    className="btn btn-light action-button"
                    role="button"
                    href=""
                  >
                    Connexion
                    <br />
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBarAv;
