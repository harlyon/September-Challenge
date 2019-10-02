import React from "react";
import banner from "../image/contact.jpg"

const Contact = () => {
  const image = {
    backgroundImage: `url(${banner})`
  };
  return (
    <div>
    <section className="section pb-0">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header bg-cover" style={image} />
              </div>
            </div>
          </div>
      </section>
      <section className="section">
      <div className="bg-triangle bg-triangle-dark bg-triangle-left bg-triangle-top" />
      <div className="bg-triangle bg-triangle-dark bg-triangle-right bg-triangle-top" />
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h6 className="title">
                Our offices
              </h6>
            </div>
            <div className="col-md-10">
              <h3 className="mb-4">
                Want to talk <span className="text-primary">in person</span>? Call us or visit us
              </h3>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nam voluptatum facilis, atque officiis possimus totam placeat maiores at tempore nulla corporis rem aliquid iusto ab, distinctio, nostrum cumque asperiores!
              </p>
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <h5>
                    Location:
                  </h5>
                  <p className="text-muted">
                    34 Bellevue Boulevard, Johannesburg, SA 2198
                  </p>
                  <h5>
                    Email:
                  </h5>
                  <p className="text-muted">
                    <a href="mailto:admin@domain.com">
                      admin@domain.com
                    </a>
                  </p>
                </div>
                <div className="col-md-6 col-lg-5">
                  <h5>
                    Call us:
                  </h5>
                  <p className="text-muted">
                    <a href="tel:1234567890">
                      27-465-78-90
                    </a>
                  </p>
                  <h5>
                    Skype:
                  </h5>
                  <p className="text-muted">
                    <a href="tel:1234567890">
                      simpleqode.skype
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;