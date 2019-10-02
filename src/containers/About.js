import React from "react";
import banner from "../image/main_banner2.jpg"

const About = () => {
  const image = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "center"
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
        <section className="section bg-light">
          <div className="bg-triangle bg-triangle-dark bg-triangle-left bg-triangle-top" />
          <div className="bg-triangle bg-triangle-dark bg-triangle-right bg-triangle-top" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <h2 className="text-center mb-4">
                  Our range of services
                </h2>
                <p className="text-center text-muted text-left mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officiis odio repudiandae illum molestiae.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="text-center mb-5 mb-md-0">
                  <div className="text-primary mb-4">
                    <span className="icon icon-clock icon-2x" />
                  </div>
                  <h4 className="mb-3">
                    Round-the-clock shipment
                  </h4>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa, corporis.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center mb-5 mb-md-0">
                  <div className="text-primary mb-4">
                    <span className="icon icon-cart icon-2x" />
                  </div>
                  <h4 className="mb-3">
                    Door-to-door delivery
                  </h4>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa, corporis.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="text-primary mb-4">
                    <span className="icon icon-support icon-2x" />
                  </div>
                  <h4 className="mb-3">
                    Customer service
                  </h4>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa, corporis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;