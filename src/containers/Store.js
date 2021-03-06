import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../config/firebase";
import banner from "../image/store.jpg";
import Loader from 'react-loader'

const image = {
  backgroundImage: `url(${banner})`,
  backgroundSize: "center"
};

class Store extends Component {
    state = {
      items: [],
      loading: true
    };


  allItems = querySnapshot => {
    const items = [];
    querySnapshot.forEach(doc => {
      const { description, image, price, title } = doc.data();
      items.push({
        key: doc.id,
        title,
        description,
        image,
        price
      })
    })
    this.setState({ items, loading: false });
    sessionStorage.setItem("store", JSON.stringify(items))
  }

  componentDidMount() {
    firebase.firestore().collection("items").onSnapshot(this.allItems)
  }

render(){
  const { loading, items } = this.state
  console.log("ALL ITEMS",items)
  return (
  <div>
    { loading && <Loader loaded={this.state.loaded} />}
    <section className="section pb-0">
      <div className="container">
          <div className="row">
              <div className="col">
                  <div
                    className="header bg-cover"
                    style={image}
                  />
              </div>
          </div>
      </div>
      </section>
    <div className="section bg-light">
    <div className="bg-triangle bg-triangle-dark bg-triangle-left bg-triangle-top" />
    <div className="bg-triangle bg-triangle-dark bg-triangle-right bg-triangle-top" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <h2 className="text-center mb-4">
              Featured Products
            </h2>
            <p className="text-center text-muted text-left mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officiis odio repudiandae.
            </p>
          </div>
        </div>
          <div className="row">
            {items.map((item) =>
              <div key={item.key} className="col-12 col-md-6 col-lg-4">
                <div className="position-relative">
                  <Link className="card border-3 mb-3" to={`/item/${item.key}`}>
                      <img src={item.image && item.image.avatarURL} alt="..." className="card-img" />
                      <div className="card-body">
                        <div className="row align-items-center mb-3">
                            <div className="col">
                                <h4 className="card-title mb-0">
                                  {item.title}
                                </h4>
                            </div>
                            <div className="col-auto">
                                <p className="mb-0 text-sm text-muted price">
                                    $ {item.price}
                                </p>
                            </div>
                        </div>
                          <p className="mb-0 text-sm text-muted">
                            {item.description.length < 70
                              ?
                              `${item.description}`
                              :
                              `${item.description.substring(0,55)}...`
                              }
                          </p>
                      </div>
                  </Link>
                    <button
                      className="btn btn-sm btn-circle btn-primary card-add" data-toggle="cart"
                      data-action="add"
                    >
                      <i className="fas fa-plus" />
                    </button>
                </div>
            </div>
              )}
          </div>
      </div>
    </div>
</div>
  );
}
};

export default Store;