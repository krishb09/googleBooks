import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';

//Pages
import Books from "./pages/Books";
import Search from "./pages/Search";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Card />

          <Switch>
            <Route exact path= "/" component= {Books} /> 
            <Route exact path= "/books" component= {Books} />
            <Route exact path= "/search" component= {Search} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
