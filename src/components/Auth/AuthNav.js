import React, { Component } from "react";
import Nav from "../Nav"
import firebase from "../../config/firebase"

class AuthNav extends Component {

  state = {
    user: {}
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  logOut = () => {
    firebase.auth().signOut();
  };
  render() {
    const { user } = this.state
    return (
      <div>
      {
        user ? (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <svg className="navbar-brand-svg" viewBox="0 0 235 80" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M0 0 L 20 10 L 0 20 Z" className="text-primary" fill="currentColor" />
                <path d="M0 30 L 20 40 L 0 50 Z M20 45 L 0 55 L 20 65 Z M0 60 L 20 70 L 0 80 Z" fill="currentColor" />
                <text x={40} y={70} fontSize={60} fontWeight="bold" letterSpacing="-.025em" fill="currentColor">Watch..</text>
              </svg>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item-divider">
                  <span className="nav-link">
                    <span />
                  </span>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="fab fa-github" />
                    <span className="d-lg-none ml-2">
                      Github
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="fab fa-twitter" />
                    <span className="d-lg-none ml-2">
                      Twitter
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="fab fa-instagram" />
                    <span className="d-lg-none ml-2">
                      Instagram
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/store" className="nav-link">
                    Store
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item-divider">
                  <span className="nav-link">
                    <span />
                  </span>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="fas fa-shopping-cart mr-2" /> Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={this.logOut} href="/" className="btn btn-outline-secondary animate">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        ):(
      <Nav />
      )}
      </div>
    );
  }
};

export default AuthNav;