import React, { Component } from 'react'
import { Link } from "react-router-dom";

class NavBarAp extends Component {
  
    render() {
      
        return (
            <div>
        
    <header class="header clearfix">
      <div class="header-inner">
        <nav
          class="
            navbar navbar-expand-lg
            bg-micko
            micko-head
            justify-content-sm-start
            micko-top
            pt-0
            pb-0
          "
        >
          <div class="container">
            <button class="navbar-toggler align-self-start" type="button">
              <span class="navbar-toggler-icon"
                ><i class="fas fa-bars"></i
              ></span>
            </button>
            <a
              class="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto"
              href="index.html"
            >
              <div class="#">
              
              <a className="navbar-brand" >
              <Link to="/">
              <img id="logo" src="assets/img/logo_c.png" />
              </Link>
            </a>   
            
              </div>
            </a>
            <form class="search-form-header order-lg-0 order-md-1 order-md-0">
              <input
                class="search-form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button class="search-btn btn-color btn-hover">
                <i class="fas fa-search"></i>
              </button>
            </form>
            <div
              class="
                collapse
                navbar-collapse
                bg-micko-nav
                p-3 p-lg-0
                mt-6 mt-lg-0
                d-flex
                flex-column flex-lg-row flex-xl-row
                justify-content-lg-end
                mobileMenu
              "
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav align-self-stretch">
                <li class="nav-item">
                  <Link to="/">
                  <a class="nav-link active" >Accueil</a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link to="/Publication">
                  <a class="nav-link" >Publications</a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link to="/Question">
                  <a class="nav-link">Questions</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div class="msg-noti-acnt-section order-2">
              <ul class="mn-icons-set align-self-stretch">
                <li class="mn-icon">
                  <a class="mn-link" href="messages.html" role="button">
                    <i class="fas fa-envelope"></i>
                    <div class="alert-circle"></div>
                  </a>
                </li>
                <li class="mn-icon">
                  <a
                    class="mn-link"
                    href="all_notifications.html"
                    role="button"
                  >
                    <i class="fas fa-bell"></i>
                    <div class="alert-circle"></div>
                  </a>
                </li>
                <li class="mn-icon dropdown dropdown-account">
                  <a
                    href="#"
                    class="opts_account"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <img src="assets/img/left-imgs/img-1.jpg" alt="" />
                    <i class="fas fa-caret-down arrow-icon"></i>
                  </a>
                  <ul
                    class="
                      dropdown-menu dropdown-menu-account dropdown-menu-end
                    "
                  >
                    <li class="media-list">
                      <div class="media">
                        <div class="media-left">
                          <img
                            class="ft-plus-square icon-bg-circle bg-cyan mr-0"
                            src="assets/img/left-imgs/img-1.jpg"
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <h6 class="media-heading text-16">Joginder Singh</h6>
                          <p class="email-text font-small-3">
                            <a
                              href="https://gambolthemes.net/cdn-cgi/l/email-protection"
                              class="__cf_email__"
                              data-cfemail="650f0a020c0b01001725001d04081509004b060a08"
                              >[email&#160;protected]</a
                            >
                          </p>
                          <a
                            href="my_profile_timeline.html"
                            class="view-p-link font-small-4"
                            >View Profile</a
                          >
                        </div>
                      </div>
                      <div class="night_mode_switch__btn">
                        <a href="#" id="night-mode" class="btn-night-mode">
                          <i class="far fa-moon"></i>Night mode
                          <span class="btn-night-mode-switch">
                            <span class="uk-switch-button"></span>
                          </span>
                        </a>
                      </div>

                      <a href="create.html" class="item channel_item">Create</a>
                      <a href="setting.html" class="item channel_item"
                        >Setting</a
                      >
                    </li>
                    <li class="dropdown-menu-footer">
                      <a
                        class="dropdown-item-link text-link text-center"
                        href="sign_in.html"
                        >Logout</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="overlay"></div>
      </div>
    </header>

            </div>
        );
    }
}

export default NavBarAp;
