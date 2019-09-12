import React from "react";
import banner from "../image/contact.jpg"

const Contact = () => {
  const image = {
    backgroundImage: `url(${banner})`
  };
  return (
    <div>
    <section className="section pb-0">
          {/* Content */}
          <div className="container">
            <div className="row">
              <div className="col">
                {/* Header */}
                <div className="header bg-cover" style={image} />
              </div>
            </div> {/* / .row */}
          </div> {/* / .container */}
      </section>
      <section className="section">
      <div className="bg-triangle bg-triangle-dark bg-triangle-left bg-triangle-top" />
      <div className="bg-triangle bg-triangle-dark bg-triangle-right bg-triangle-top" />
        {/* Content */}
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              {/* Title */}
              <h6 className="title">
                Our offices
              </h6>
            </div>
            <div className="col-md-10">
              {/* Heading */}
              <h3 className="mb-4">
                Want to talk <span className="text-primary">in person</span>? Call us or visit us
              </h3>
              {/* Subheading */}
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nam voluptatum facilis, atque officiis possimus totam placeat maiores at tempore nulla corporis rem aliquid iusto ab, distinctio, nostrum cumque asperiores!
              </p>
              {/* Content */}
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  {/* Heading */}
                  <h5>
                    Location:
                  </h5>
                  {/* Address */}
                  <p className="text-muted">
                    34 Bellevue Boulevard, Johannesburg, SA 2198
                  </p>
                  {/* Heading */}
                  <h5>
                    Email:
                  </h5>
                  {/* Address */}
                  <p className="text-muted">
                    <a href="mailto:admin@domain.com">
                      admin@domain.com
                    </a>
                  </p>
                </div>
                <div className="col-md-6 col-lg-5">
                  {/* Heading */}
                  <h5>
                    Call us:
                  </h5>
                  {/* Phone */}
                  <p className="text-muted">
                    <a href="tel:1234567890">
                      27-465-78-90
                    </a>
                  </p>
                  {/* Heading */}
                  <h5>
                    Skype:
                  </h5>
                  {/* Phone */}
                  <p className="text-muted">
                    <a href="tel:1234567890">
                      simpleqode.skype
                    </a>
                  </p>
                </div>
              </div>   {/* / .row */}
            </div>
          </div> {/* / .row */}
        </div> {/* / .container */}
      </section>
    </div>
  );
};

export default Contact;