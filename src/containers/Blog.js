import React, { Component } from "react";
import firebase from "../config/firebase";
import { Link } from "react-router-dom";
import blog from "../image/blog.jpg";

const image = {
    backgroundImage: `url(${blog})`,
    backgroundSize: "center"
};

class Blog extends Component {
  state = {
      blogs: [],
      loading: true
  };

  blogs = querySnapshot => {
      const blogs = [];
      querySnapshot.forEach(doc => {
        const { description, image, title } = doc.data();
        blogs.push({
          key: doc.id,
          title,
          description,
          image
        })
      })
      this.setState({ blogs, loading: false });
      sessionStorage.setItem("store", JSON.stringify(blogs))
  }

    componentDidMount() {
      firebase.firestore().collection("blog").onSnapshot(this.blogs)
    }

    render() {
    const { loading, blogs } = this.state
    console.log("all", blogs)
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
        <section>
          <div className="container section pb-5">
            <div className="row align-items-stretch">
            {
                blogs.map(blog =>
                  <div key={blog.key}className="col-12 col-lg-4 mb-3 mb-lg-0">
                    <Link to={`/blog/${blog.key}`} className="card h-100" href="blog-post.html">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters mb-4">
                            <div className="col-auto">
                              <div className="avatar mr-3">
                                <img src="assets/img/16.jpg" alt="..." className="img-cover rounded-circle" />
                              </div>
                            </div>
                            <div className="col">
                              <p className="mb-0 text-xs text-muted">
                                by <strong className="text-body">Admin</strong>
                              </p>
                            </div>
                        </div>
                        <h4>
                          Enhance your brand potential with giant advertising
                        </h4>
                        <p className="mb-0 text-sm text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                      </div>
                    </Link>
                  </div>
                )
            }

            </div>
          </div>
        </section>
    </div>
    )
}
}

export default Blog;
