import React, { Component } from "react";

class Connexion extends Component {
  render() {
    return (
      <div>
        <section className="register-photo">
          <div className="form-container">
            <div className="image-holder">
              <div className="text-center"></div>
            </div>
            <form method="post">
              <div>
                <h2 className="text-center">Connexion</h2>
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
                  <button className="btn btn-primary btn-block" type="submit">
                    Connexion
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
export default Connexion;
