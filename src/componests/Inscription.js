import React, { Component } from "react";
import NavBarAv from "./NavBarAv";

export default class Inscription extends Component {
  render() {
    return (
      <div>
        <NavBarAv />
        <section className="register-photo">
          <div className="form-container">
            <div className="image-holder inscr">
              <div className="text-center"></div>
            </div>
            <form method="post">
              <h2 className="text-center">Créer un compte</h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="nom"
                  placeholder="Nom"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password-repeat"
                  placeholder="Répéter le mot de passe"
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block btninscr"
                  type="submit"
                >
                  Inscription
                </button>
              </div>
              <a className="already" href="#">
                Vous avez déjà un compte ?<br />
                Connectez-vous.
                <br />
              </a>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
