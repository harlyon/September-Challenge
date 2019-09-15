import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../config/firebase";
import banner from "../image/store.jpg";

const image = {
  backgroundImage: `url(${banner})`,
  backgroundSize: "center"
};

class Store extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("items");
    this.unsubscribe = null;
    this.state = {
      items: []
    };
  }

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
    this.setState({ items });
    console.log(items)
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.allItems)
  }

render(){
  const { items } = this.state
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
    <div className="section">
    <div className="bg-triangle bg-triangle-dark bg-triangle-left bg-triangle-top" />
    <div className="bg-triangle bg-triangle-dark bg-triangle-right bg-triangle-top" />
        <div className="container">
            <div className="row">
                {items.map((property) =>
                <div key={property.key} className="col-12 col-md-6 col-lg-4">
                    <div className="position-relative">
                        <Link className="card border-3 mb-3" to={`/item/${property.key}`}>
                            <img src="http://html.lionode.com/darklook/images/product/product1.jpg" alt="..." className="card-img" />
                            <div className="card-body">
                                <div className="row align-items-center mb-3">
                                    <div className="col">
                                        <h4 className="card-title mb-0">
                                          {property.name}
                                        </h4>
                                    </div>
                                    <div className="col-auto">
                                        <p className="mb-0 text-sm text-muted">
                                            $70
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-0 text-sm text-muted">
                                Jet Setter drips luxury in 234 genuine diamonds, 18K gold-plated stainless steel case, and five timezone Swiss movements. A rich dial shows off gold tinted mother-of-pearl accents. Mounted on a matching stainless steel bracelet, adjustable for a custom fit. Travel the globe — and look luxury doing it..
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