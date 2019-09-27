import React, { Component } from "react";
import firebase from "../config/firebase";

class SingleProduct extends Component {
  state = {
    item: {},
    // key: "",
    // user: {}
  };

  componentDidMount() {
    const ref = firebase
    .firestore()
    .collection("items")
    .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          item: doc.data(),
          key: doc.id
        });
      } else {
        console.log("No such document!");
      }
    });
  }

render(){
  const { item } = this.state
  console.log(item)
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
                {item.title}
              </h3>
              {/* Text */}
              <p className="mb-5 text-muted">
                {item.description}
              </p>
              {/* Form */}
              <form className="mb-5 mb-md-0">
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
              <img src="https://simpleqode.bitbucket.io/incline/assets/img/83.jpg" alt="..." className="img-fluid mb-5" />
            </div>
          </div>
        </div>
    </section>
    </div>
  );
}
};

export default SingleProduct;