import React, { Component } from 'react'
import firebase from '../config/firebase';
import SideBar from "../components/Auth/SideBar";
import FileUploader from "react-firebase-file-uploader";

export default class EditBlog extends Component {
  state = {
    title: '',
    description: '',
    image: {
      avatar: '',
      isUploading: '',
      progress: 0,
      avatarURL: ''
    },
  };

  componentDidMount() {
    const ref = firebase.firestore().collection('blog').doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        const blog = doc.data();
        this.setState({
          key: doc.id,
          title: blog.title,
          description: blog.description,
          image: blog.image
        });
      } else {
        console.log("No document found");
      }
    });
  }

  editBlog = e => {
    e.preventDefault();
    const { title, description, image, key } = this.state
    const update = firebase.firestore()
    .collection("blog").doc(key);
    update.set({
      title,
      description,
      image
    })
    .then(docRef => {
      this.setState({
        title: '',
        description: '',
        image: {
          avatar: '',
          isUploading: '',
          progress: 0,
          avatarURL: ''
        },
      })
      this.props.history.push("/blog");
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
    console.log("success")
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
    return (
        <div>
          <h1>Edit Blog</h1>
          <SideBar />
        </div>
    )
  }
}
