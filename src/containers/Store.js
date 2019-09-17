import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../config/firebase";
import banner from "../image/store.jpg";

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
      const { description, avatar, price, title } = doc.data();
      items.push({
        key: doc.id,
        title,
        description,
        avatar,
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
  return (
  <div>
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
            <div className="row">
            {
              loading &&
              <img
                src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
                alt="Fetching Data ............."
                style={{ width: "300px", margin: "50px auto", display: "block" }}
              />
            }
                {items.map((item) =>
                <div key={item.key} className="col-12 col-md-6 col-lg-4">
                    <div className="position-relative">
                        <Link className="card border-3 mb-3" to={`/item/${item.key}`}>
                            <img src="https://simpleqode.bitbucket.io/incline/assets/img/83.jpg" alt="..." className="card-img" />
                            <div className="card-body">
                                <div className="row align-items-center mb-3">
                                    <div className="col">
                                        <h4 className="card-title mb-0">
                                          {item.title}
                                        </h4>
                                    </div>
                                    <div className="col-auto">
                                        <p className="mb-0 text-sm text-muted">
                                            $70
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-0 text-sm text-muted">
                                Jet Setter drips luxury in 234 genuine diamonds, 18K gold-plated stainless steel case..
                                </p>
                            </div>
                        </Link>
                        <button className="btn btn-sm btn-circle btn-primary card-add" data-toggle="cart" data-action="add">
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