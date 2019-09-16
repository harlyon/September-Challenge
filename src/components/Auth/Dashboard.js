import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            {/* Title */}
            <h6 className="title">
              Dashboard
            </h6>
          </div>
          <div className="col-md-10">
            {/* Heading */}
            <h3 className="mb-4">
              Welcome Once Again
            </h3>
            {/* Subheading */}
            <p className="text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            {/* Items */}
            <div className="row">
              <div className="col-md-6">
                {/* Card */}
                <a href="#" className="card mb-3 mb-md-0">
                  {/* Body */}
                  <div className="card-body">
                    {/* Icon */}
                    <div className="card-icon text-primary">
                      <span className="icon icon-at" />
                    </div>
                    {/* Title */}
                    <h5 className="card-title">
                      Number Of Items Present
                    </h5>
                    {/* Text */}
                    <p className="card-text text-muted">
                      12.
                    </p>
                  </div>
                </a> {/* / .card */}
              </div>
              <div className="col-md-6">
                {/* Card */}
                <a href="#" className="card">
                  {/* Body */}
                  <div className="card-body">
                    {/* Icon */}
                    <div className="card-icon text-primary">
                      <span className="icon icon-edit" />
                    </div>
                    {/* Title */}
                    <h5 className="card-title">
                      Add New Item
                    </h5>
                    {/* Text */}
                    <p className="card-text text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </a> {/* / .card */}
              </div>
            </div> {/* / .row */}
          </div>
        </div> {/* / .row */}
      </div> {/* / .container */}
    </section>
    )
  }
}
