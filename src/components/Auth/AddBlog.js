import React, { Component } from 'react';
import FileUploader from "react-firebase-file-uploader";
import firebase from "../../config/firebase";
import Login from '../../containers/Login';
import SideBar from './SideBar';


export default class AddBlog extends Component {
  state = {
    title: "",
    description: "",
    image: {
      avatar: "",
      isUploading: "",
      progress: 0,
      avatarURL: ""
    },
  }

  addBlog = e => {
    e.preventDefault();
    const { title, image, description } = this.state
    firebase.firestore().collection("blog")
    .add({ title, description, image })
    .then(docRef => {
      this.setState({
        title: "",
        description: "",
        image: {
          avatar: "",
          isUploading: "",
          progress: 0,
          avatarURL: ""
        },
      })
      this.props.history.push("/blog")
    })
    .catch(error => {
      console.error("Error adding document: ", error)
    });
  }

  resetForm = e => {
    e.preventDefault();
    this.setState({
      title: "",
      description: "",
      image: {
        avatar: "",
        isUploading: "",
        progress: 0,
        avatarURL: ""
      }
    });
  }

  handleProgress = progress => {
    this.setState({ image: {progress} });
  }

  handleUploadSucces = filename => {
    console.log(this.state.image);
    this.setState({
      image: {
        avatar: filename,
        progress: 100,
        isUploading: false
      }
    });
    firebase
      .storage()
      .ref("images")
      .chile(filename)
      .getDownloadURL()
      .then(url => this.setState({
        image: {
          avatarURL: url
        }
      }))
  };

  handleChange = e => [
    this.setState({
      [e.target.name] : e.target.value
    })
  ]

  render() {
    const { title, description, image } = this.state
    return(
      <section className="section pb-5">
        <div className="container">
          <div className="row">
            <SideBar />
            <div className="col-md-10">
              <h3 className="mb-4">
                New Blog Post? Add them to the <span className="text-primary">list</span>
              </h3>
              <div class="text-center">
                <FileUploader
                  accept="image/*"
                  name="avatar"
                  randomizeFilename
                  storageRef={firebase.storage().ref("images")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSucces}
                  onProgress={this.handleProgress}
                />
                <br />
                <br />
                <div className="fuzone">
                  <span>
                    <i className="image-fluid"></i>
                  </span>
                  {
                    image.progress && (
                      <img
                        style={{ height: "50%", width: "50%" }}
                        alt="fetching......"
                        src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
                      />
                    )
                  }
                  {
                    image.avatarURL ? (
                      <div>
                        <img
                          style={{ height: "50%", width: "50%"}}
                          src={image.avatarURL}
                          alt="hry"
                        />
                      </div>
                    ) : null
                  }
                </div>
              </div>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Title</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control order-1"
                        name="title"
                        value={title}
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
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label>Item Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={description}
                      onChange={this.handleChange}
                      rows={7}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    <button onClick={this.addItem} type="submit" className="btn btn-outline-primary">
                    Create Blog
                    </button>
                    <button onClick={this.resetForm} type="reset" className="btn btn-link">
                      Reset Form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
