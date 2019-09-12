import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="section bg-dark">
        <div className="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-left" />
        <div className="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-right" />
        <div className="container">
          <div className="row align-self-center">
            <div className="col-md-auto">
              <p>
                <a href="/" className="footer-brand text-white">
                  <svg className="footer-brand-svg" viewBox="0 0 235 80" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path d="M0 0 L 20 10 L 0 20 Z" className="text-primary" fill="currentColor" />
                    <path d="M0 30 L 20 40 L 0 50 Z M20 45 L 0 55 L 20 65 Z M0 60 L 20 70 L 0 80 Z" fill="currentColor">
                    </path>
                    <text x={40} y={70} fontFamily="Arial, sans-serif" fontSize={60} fontWeight="bold" letterSpacing="-.025em" fill="currentColor">Watch..</text>
                  </svg>
                </a>
              </p>
            </div>
            <div className="col-md">
              <ul className="list-unstyled list-inline text-md-right">
                <li className="list-inline-item mr-2">
                  <a href="/" className="text-white">
                    Terms and conditions
                  </a>
                </li>
                <li className="list-inline-item mr-2">
                  <a href="/" className="text-white">
                    Privacy policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/" className="text-white">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md">
              <p className="text-white text-muted">
                <small>
                  © Copyright <span className="current-year" /> Watch.. All rights reserved.
                </small>
              </p>
            </div>
            <div className="col-md">
              <ul className="list-inline list-unstyled text-md-right">
                <li className="list-inline-item">
                  <a href="/">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li className="list-inline-item ml-3">
                  <a href="/">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item ml-3">
                  <a href="/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;