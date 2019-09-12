import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './Pages/Main';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Store from './Pages/Store';

function App() {
  return (
    <div>
      <Nav />
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/store" component={Store} />
        </Router>
      <Footer />
    </div>
  );
}

export default App;
