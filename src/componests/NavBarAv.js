import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBarAv extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button" style={{paddingbottom: '0' , paddingtop: '0', color: 'rgb(97,110,126)', fontfamily: 'Roboto sanserif', fontsize: '16px' , filter: 'brightness(100%)', fontweight: '900', paddingright: '40', paddingleft: '40', width: '100%'}}>
          <div className="container">
            <a className="navbar-brand" href="accueil.html">
              <img id="logo" src="assets/img/logo.png" style={{width: '135px'}} />
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
                  <Link to="/">
                    <a className="nav-link" href="accueil.html">
                      Accueil
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
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
