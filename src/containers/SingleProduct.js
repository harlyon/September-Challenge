import React, { Component } from "react";
import firebase from "../config/firebase";

class SingleProduct extends Component {
  state = {
    item: {},
    // key: "",
    // user: {}
  };

render(){
  return (
    <div>
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 order-md-2">
              {/* Preheading */}
              <p className="font-weight-medium text-xs text-uppercase text-primary">
                Unisex shoe
              </p>
              {/* Heading */}
              <h3 className="mb-4">
                Converse Chuck Taylor All Star Low Top
              </h3>
              {/* Text */}
              <p className="mb-5 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              {/* Form */}
              <form className="mb-5 mb-md-0">
                <div className="form-row">
                  <div className="col-12">
                    <label>
                      Select size:
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-6">
                    {/* Size */}
                    <div className="extended-radio">
                      <input className="extended-radio-input" id="sizeInputOne" type="radio" name="sizeInput" defaultChecked />
                      <label className="extended-radio-label text-xs" htmlFor="sizeInputOne">
                        M 3 / W 5
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* Size */}
                    <div className="extended-radio">
                      <input className="extended-radio-input" id="sizeInputTwo" type="radio" name="sizeInput" />
                      <label className="extended-radio-label text-xs" htmlFor="sizeInputTwo">
                        M 3.5 / W 5.5
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* Size */}
                    <div className="extended-radio">
                      <input className="extended-radio-input" id="sizeInputThree" type="radio" name="sizeInput" />
                      <label className="extended-radio-label text-xs" htmlFor="sizeInputThree">
                        M 4 / W 6
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* Size */}
                    <div className="extended-radio">
                      <input className="extended-radio-input" id="sizeInputFour" type="radio" name="sizeInput" />
                      <label className="extended-radio-label text-xs" htmlFor="sizeInputFour">
                        M 4.5 / W 6.5
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* Size */}
                    <div className="extended-radio">
                      <input className="extended-radio-input" id="sizeInputFive" type="radio" name="sizeInput" />
                      <label className="extended-radio-label text-xs" htmlFor="sizeInputFive">
                        M 5 / W 7
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    {/* Button */}
                    <button className="btn btn-outline-primary btn-block mt-3">
                      Add to cart
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-8 order-md-1">
              {/* Image */}
              <img src="http://html.lionode.com/darklook/images/product/product1.jpg" alt="..." className="img-fluid mb-5" />
            </div>
          </div>
        </div>
    </section>
    </div>
  );
}
};

export default SingleProduct;