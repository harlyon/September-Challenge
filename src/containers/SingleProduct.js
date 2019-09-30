import React, { Component } from "react";
import firebase from "../config/firebase";
import { Link } from "react-router-dom";

// const query = firebase.firestore().collections(items)

class SingleProduct extends Component {
  state = {
    item: {},
    key: "",
    user: {}
  };

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentDidMount() {
    this.authListener();
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

  delete = (id) => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/store");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  }

render(){
  const { item, user, key } = this.state
  console.log("it", item)
  return (
    <div>
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 order-md-2">
              {/* Heading */}
              <h3 className="mb-4">
                {item.title}
              </h3>
              {/* Text */}
              <p className="mb-3 text-muted">
                {item.description}
              </p>
                {/* Preheading */}
                <p className="font-weight-medium text-xs text-uppercase text-primary">
                $ {item.price}
              </p>
              {/* Form */}
              <button style={{ marginRight: "10px" }} className="btn btn-outline-danger btn-sm btn-circle">
                delete
              </button>
              <Link to={`/edit/${key}`} className="btn btn-outline-secondary btn-sm btn-circle">
                edit
              </Link>
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
              <img src={item.image && item.image.avatarURL} alt="..." className="img-fluid mb-5" />
            </div>
          </div>
        </div>
    </section>
    </div>
  );
}
};

export default SingleProduct;