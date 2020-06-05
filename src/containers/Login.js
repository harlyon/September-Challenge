import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import firebase from "../config/firebase"
import Loader from 'react-loader'
import Swal from 'sweetalert2'

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    user: "",
    isLoading: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateInput = e => {
    e.preventDefault();
    if (this.state.email.trim() === "" || this.state.password.trim() === "") {
      Swal.fire({
        type: 'error',
        text: 'Both fields are required!',
      })
    } else {
      this.signIn();
    }
  };

  signIn = () => {
    this.setState({ isLoading: true })
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(u => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      })
      Toast.fire({
        type: 'success',
        title: 'Signed in successfully'
      })
      this.props.history.push('/dashboard')
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { email, password, isLoading } = this.state
    return (
      <section className="section section-full section-top bg-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <form onSubmit={this.validateInput} className="form-styled bg-white">
                {
                  isLoading && <Loader loaded={this.state.loaded} />
                }
                <h4 className="text-center mb-4">
                  Welcome back
                </h4>
                <p className="text-center text-muted mb-5">
                  Please fill out the form below to sign in to your account. <br />
                  Email: admin@gmail.com
                  Password: string
                </p>
                <div className="form-group">
                  <label>Email address</label>
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      className="form-control order-1"
                      onChange={this.handleChange}
                    />
                    <div className="input-group-append order-0">
                      <div className="input-group-text">
                        <svg className="input-group-icon icon-offset icon icon-envelope" viewBox="0 0 106 106" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <path transform="translate(3 3)" d="
                          M0 30 V 10 H 100 V 90 H 0 V 30 L 50 60 L 100 30">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control order-1"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    <div className="input-group-append order-0">
                      <div className="input-group-text">
                        <svg className="input-group-icon icon-offset icon icon-lock" viewBox="0 0 106 106" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <path transform="translate(3 3)" d="
                          M25 50 V 20 A 25 25 0 0 1 50 0 A 25 25 0 0 1 75 20 V 50 H 90 V 100 H 10 V 50 H 75 M50 85 A 5 5 0 0 1 45 80 V 70 A 5 5 0 0 1 50 65 A 5 5 0 0 1 55 70 V 80 A 5 5 0 0 1 50 85">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row align-items-center">
                  <div className="col-md">
                    <div className="text-center text-md-right">
                      <button type="submit" className="btn btn-outline-primary">
                        Sign in now
                      </button>
                    </div>
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
