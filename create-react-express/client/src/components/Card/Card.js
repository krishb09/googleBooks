import React from 'react';
import "../Card/Card.css"; 



const Card = () => {
    return (
        <div className="container">
        <div className="main">
            <div className="card text-center">
                <div className="card-body">
                    <h4 className="card-title">Search for books: </h4>
                    <p className="card-text">Look up any of your favorite books!</p>
                    <div className="form">
                        <form>
                            <input type="book" className="form-control" id="inputBook" placeholder="Enter Book Name"></input>
                        </form>
                        <br></br>
                    </div>
                    <button type="button" className="btn btn-info">Search</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Card;