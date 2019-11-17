import React from 'react';
import "../Header/Header.css"; 


const Header = () => {
    return (
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to Google Books Search!</h2>
          <i className="material-icons md-72">menu_book</i>
        </div>

    )
}
export default Header;