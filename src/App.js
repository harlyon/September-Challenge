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

function App() {
  return (
    <div>
      <Nav />
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/item/:id" component={SingleProduct} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add" component={AddItem} />
          <Route exact path="/login" component={Login} />

        </Router>
      <Footer />
    </div>
  );
}

export default App;
