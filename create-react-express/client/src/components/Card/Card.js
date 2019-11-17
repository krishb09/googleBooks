import React from 'react';
import "../Card/Card.css";

const Card = props => {
    return (
        <div className="container">
            <div className="main">
                <div className="card text-center">
                    <div className="card-body">
                        <h4 className="card-title">Search for books: </h4>
                        <p className="card-text">Look up any of your favorite books!</p>
                        <div className="form">
                            <form>
                                <input  value= {props.search} 
                                onChange= {props.handleSearchInput} 
                                type="book" className="form-control" id="inputBook" placeholder="Enter Book Name"></input>
                            </form>
                            <br></br>
                        </div>
                        {/* handle form submit */}
                        <button type="button" className="btn btn-info" onClick= {props.handleFormSubmit} >Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;