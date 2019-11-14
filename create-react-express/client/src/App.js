import React, { Component } from "react";
import "./App.css";
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Card />

        <Footer />
      </div>
    );
  }
}

export default App;
