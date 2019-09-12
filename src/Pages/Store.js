import React, {useState, useEffect } from "react";
import firebase from "../config/firebase";
import banner from "../image/store.jpg"

const image = {
  backgroundImage: `url(${banner})`,
  backgroundSize: "center"
};

function ItemList() {
  const [items, setItems ] = useState([]);

  useEffect(() => {
    firebase.firestore().collection("items")
    .onSnapshot((snapshot) => {
      const allItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setItems(allItems)
    })
  }, [])

  return items
}

const Store = () => {
  const items = ItemList()
  console.log(items)

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
                <div key={property.id} className="col-12 col-md-6 col-lg-4">
                    <div className="position-relative">
                        <a className="card border-0 mb-3" href="shop-item.html">
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
                        </a>
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
};

export default Store;