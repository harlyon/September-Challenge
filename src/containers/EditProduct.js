import React, { Component } from 'react';
import firebase from '../config/firebase';
import SideBar from "../components/Auth/SideBar";
import FileUploader from "react-firebase-file-uploader";

class EditProduct extends Component {
  state = {
    key: '',
    title: '',
    price: '',
    description: '',
    image: {
      avatar: '',
      isUploading: '',
      progress: 0,
      avatarURL: ''
    },
  };

  componentDidMount() {
    const ref = firebase.firestore().collection('items').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exist) {
        const item = doc.data();
        this.setState({
          key: doc.id,
          title: item.title,
          price: item.price,
          description: item.description,
          image: item.image
        });
      }
    });
  }

  addItem = e => {
    e.preventDefault();
    const { title, price, description, image } = this.state
    firebase.firestore()
    .collection("items")
    .add({
      title: "",
      price: "",
      description: "",
      image: {
        avatar: "",
        isUploading: "",
        progress: 0,
        avatarURL: ""
      },
    })
    .then(docRef => {
      this.setState({title, price, description, image})
      this.props.history.push("/store");
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
    console.log("success")
  }

  handleProgress = progress => {
    this.setState({ image: {progress} });
  }

  handleUploadSuccess = filename => {
    console.log(this.state.image);
    this.setState({
      image: { avatar: filename, progress: 100, isUploading: false }
    });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ image: { avatarURL: url } }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name)
  };

  render() {
    const { title, price, description, image } = this.state
    return (
    <section className="section pb-5">
      <div className="container">
        <div className="row">
        <SideBar />
          <div className="col-md-10">
            <h3 className="mb-4">
              New Items? Add them to the <span className="text-primary">list</span>
            </h3>
            <div class="text-center">
              <FileUploader
                accept="image/*"
                name="avatar"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
              <br />
              <br />
              <div className="fuzone">
                  <span>
                    <i className="image-fluid"> </i>
                  </span>
                  {this.state.image.isUploading && (
                    <p>progress : {this.state.image.progress} </p>
                  )}
                  {this.state.image.progress && (
                    <img
                      src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
                      alt="Fetching Data ............."
                      style={{ width: "300px", margin: "50px auto", display: "block" }}
                    />
                  )}
                  {image.avatarURL ? (
                    <div>
                      <img
                        style={{ height: "50%", width: "50%" }}
                        src={this.state.image.avatarURL}
                        alt="hry"
                      />
                    </div>
                  ) : null}
              </div>
            </div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Title</label>
                  <div className="input-group">
                    <input type="text"
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
                <div className="form-group col-md-6">
                  <label>Price</label>
                  <div className="input-group">
                    <input type="number"
                            className="form-control order-1"
                            name="price"
                            value={price}
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
                            value={description}
                            onChange={this.handleChange}
                            rows={7}
                            />
                </div>
              </div>
              <div className="form-row">
                <div className="col-12">
                  <button onClick={this.addItem} type="submit" className="btn btn-outline-primary">
                    Edit Item
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

export default EditProduct;