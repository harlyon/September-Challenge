import React, { Component } from "react";
import firebase from "../config/firebase";
import { Link } from "react-router-dom";

class BlogDetails extends Component {
  state = {
    key: "",
    blog: {},
    id: "",
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
      .collection("blog")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          blog: doc.data(),
          key: doc.id
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
      .collection("blog")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/blog");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  };

  render() {
    const { blog, user, key } = this.state
    return (
      <section className="section pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="row align-items-center justify-content-center no-gutters mb-4">
                <div className="col-auto">
                  <div className="avatar mr-3">
                    <img
                      src={blog.image && blog.image.avatarURL}
                      alt="..."
                      className="img-cover rounded-circle"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <p className="mb-0 text-xs text-muted">
                    by <strong className="text-body">Admin</strong>
                  </p>
                </div>
              </div>
              <h1 className="mb-5 font-weight-bold text-center">
                What are the big reasons for marketing your business
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <img
                src={blog.image && blog.image.avatarURL}
                alt="..."
                className="img-fluid mb-3 justify-content-center"
              />
              <p className="text-center text-sm text-muted mb-5">
                { blog.title }
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              {/* <blockquote className="blockquote">
                <p>
                {
                  blog !== undefined || blog.description.length < 70
                  ?
                  `${blog.description}`
                  :
                  `${blog.description.substring(0,55)}...`
                }
                </p>
              </blockquote> */}
              <p>
                { blog.description }
              </p>
              {
                user ? (
                <>
                  <button onClick={this.delete} className="btn btn-outline-danger btn-sm btn-circle mr-3">
                    delete
                  </button>
                  <Link to={`/id/${key}`} className="btn btn-outline-secondary btn-sm btn-circle">
                    edit
                  </Link>
                </>
                ):(
                ""
                )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogDetails;