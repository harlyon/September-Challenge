import React, { Component } from 'react'

const item = JSON.parse(sessionStorage.getItem("store"))
export default class Dashboard extends Component {
  state = {
    items: item
  }
  render() {
    const { items } = this.state
    return (
      <section className="section">
        <div className="container">
          <div className="row">
          <div className="col-md-2">
              <h6 className="title">
                Your Dashboard
              </h6>
            </div>
            <div className="col-md-10">
              <h3 className="mb-4">
                Welcome
              </h3>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <a href="#" className="card mb-3 mb-md-0">
                    <div className="card-body">
                      <div className="card-icon text-primary">
                        <span className="icon icon-at" />
                      </div>
                      <h5 className="card-title">
                        Number Of Items Present
                      </h5>
                      <p className="card-text text-muted">
                        {items.length}
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/add" className="card">
                    <div className="card-body">
                      <div className="card-icon text-primary">
                        <span className="icon icon-edit" />
                      </div>
                      <h5 className="card-title">
                        Add New Item
                      </h5>
                      <p className="card-text text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-md-12 pt-5">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-icon text-primary">
                        <span className="icon icon-edit" />
                      </div>
                      <h5 className="card-title">
                        All Items
                      </h5>
                      {items.map((each) =>
                        <li key={each.key} className="card-text text-muted">
                        {each.title}
                      </li>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
