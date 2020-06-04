import React, { Component } from "react";
import firebase from "../config/firebase";
import { Link } from "react-router-dom";
import Loader from 'react-loader'


class SingleProduct extends Component {
  state = {
    key: "",
    item: {},
    id: "",
    user: {},
    loading: true
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
          key: doc.id,
          loading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete = () => {
    const id = this.state.key
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
  const { item, user, key, loading } = this.state
  console.log("id", item)
  return (
    <div>
      {
        loading && <Loader loaded={this.state.loaded} />
      }
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4 col-md-6 order-md-2">
              <h3 className="mb-4">
                {item.title}
              </h3>
              <p className="mb-3 text-muted">
                {item.description}
              </p>
                <p className="font-weight-medium text-xs text-uppercase text-primary">
                {`${'$' + item.price}`}
              </p>
              {
                user && (
                <>
                  <button onClick={this.delete} className="btn btn-outline-danger btn-sm btn-circle mr-3">
                    delete
                  </button>
                  <Link to={`/edit/${key}`} className="btn btn-outline-secondary btn-sm btn-circle">
                    edit
                  </Link>
                </>
                )}
              <form className="mb-5 mb-md-0">
                <div className="form-row">
                  <div className="col-12">
                    {item && (
                    <button
                      className="btn btn-outline-primary btn-block mt-3 snipcart-add-item"
                      data-item-id={key}
                      data-item-image={item.image && item.image.avatarURL}
                      data-item-name={item.title}
                      data-item-price={item.price}
                      data-item-description={item.description}
                      data-item-url={`/`}
                    >
                      Add to cart {`${'$' + item.price}`}
                    </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 order-md-1">
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
