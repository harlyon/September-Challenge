import React, { Component } from "react"
import firebase from "../../config/firebase"

export default class AddItem extends Component {
  state = {
    title: "",
    price: "",
    description: ""
  }

  addItem = e => {
    e.preventDefault();
    const { title, price, description } = this.state
    firebase.firestore()
    .collection("items")
    .add({ title, price, description})
    .then(docRef => {
      this.setState({title, price, description})
      this.props.history.push("/store");
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
    console.log("success")
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name)
  };

  render() {
    return (
    <section className="section pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h6 className="title">
              Add Item Information
            </h6>
          </div>
          <div className="col-md-10">
            <h3 className="mb-4">
              New Items? Add them to the <span className="text-primary">list</span>
            </h3>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Title</label>
                  <div className="input-group">
                    <input type="text"
                            className="form-control order-1"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            />
                    <div className="input-group-append order-0">
                      <div className="input-group-text">
                        <svg className="input-group-icon icon-offset icon icon-quote" viewBox="0 0 106 106" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <path transform="translate(3 3)" d="
                          M0 100 A 50 50 0 0 1 50 60 A 20 20 0 0 1 50 0 A 20 20 0 0 1 50 60 A 50 50 0 0 1 100 100">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label>Price</label>
                  <div className="input-group">
                    <input type="number"
                            className="form-control order-1"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                            />
                    <div className="input-group-append order-0">
                      <div className="input-group-text">
                        <svg className="input-group-icon icon-offset icon icon-lock" viewBox="0 0 106 106" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <path transform="translate(3 3)" d="
                          M0 30 V 10 H 100 V 90 H 0 V 30 L 50 60 L 100 30">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12">
                  <label>Item Description</label>
                  <textarea className="form-control"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            rows={7}
                            />
                </div>
              </div>
              <div className="form-row">
                <div className="col-12">
                  <button onClick={this.addItem} type="submit" className="btn btn-outline-primary">
                  Create Item
                  </button>
                  <button type="reset" className="btn btn-link">
                  Reset Form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
