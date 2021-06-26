import React, { Component } from "react";
import NavBarAv from "./NavBarAv";

export default class Acceuil extends Component {
  render() {
    return (
      <div>
        <NavBarAv />

        <header className="header-blue">
          <div className="container hero">
            <div className="row">
              <div className="col-12 col-lg-5 col-xl-5 offset-xl-1">
                <h1>The revolution is here.</h1>
                <p>
                  Mauris egestas tellus non ex condimentum, ac ullamcorper
                  sapien dictum. Nam consequat neque quis sapien viverra
                  convallis. In non tempus lorem.{" "}
                </p>
                <button
                  className="btn btn-light btn-lg action-button"
                  type="button"
                >
                  Learn More
                </button>
              </div>
              <div className="col">
                <div className="backimg"></div>
              </div>
            </div>
          </div>
        </header>
        <section id="services" className="features-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Services</h2>
              <p className="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.
              </p>
            </div>
            <div className="row justify-content-center features">
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-map-marker icon"></i>
                  <h3 className="name">Works everywhere</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a className="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-clock-o icon"></i>
                  <h3 className="name">Always available</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a className="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-list-alt icon"></i>
                  <h3 className="name">Customizable </h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a className="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-leaf icon"></i>
                  <h3 className="name">Organic </h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a className="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-plane icon"></i>
                  <h3 className="name">Fast </h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a className="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-phone icon"></i>
                  <h3 className="name">Mobile-first</h3>
                  <p className="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a className="learn-more" href="#">
                    Learn more »
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-clean">
          <form method="post">
            <h2 className="text-center">Contact us</h2>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control is-invalid"
                type="email"
                name="email"
                placeholder="Email"
              />
              <small className="form-text text-danger">
                Please enter a correct email address.
              </small>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                rows="14"
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                send{" "}
              </button>
            </div>
          </form>
        </section>
        <footer className="footer-clean">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Legacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                  <li>
                    <a href="#">Employee success</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 item social">
                <a href="#">
                  <i className="icon ion-social-facebook"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-twitter"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-instagram"></i>
                </a>
                <p className="copyright">Company Name © 2017</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
