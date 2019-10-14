import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./containers/Main";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Store from "./containers/Store";
import SingleProduct from "./containers/SingleProduct";
import AddItem from "./components/Auth/AddItem";
import Login from "./containers/Login";
import Dashboard from "./components/Auth/Dashboard";
import Nav from "./components/Auth/AuthNav";
import EditProduct from "./containers/EditProduct";
import Blog from "./containers/Blog";
import BlogDetails from "./containers/BlogDetails";
import EditBlog from "./containers/EditBlog";
import AddBlog from "./components/Auth/AddBlog";

function App() {
  return (
    <div>
      <Nav />
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/addblog" component={AddBlog} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/blog/:id" component={BlogDetails} />
          <Route exact path="/edit/:id" component={EditBlog} />
          <Route exact path="/item/:id" component={SingleProduct} />
          <Route exact path="/add" component={AddItem} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/edit/:id" component={EditProduct} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Router>
      <Footer />
    </div>
  );
}

export default App;
