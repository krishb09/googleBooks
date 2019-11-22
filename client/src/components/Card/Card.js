import React from 'react';
import "../Card/Card.css";

function Card(props) {
    console.log(props)
    return (
        <div className="container">
            <div className="main">
                <div className="card text-center">
                    <div className="card-body">
                        <h4 className="card-title">Search for books: </h4>
                        <p className="card-text">Look up any of your favorite books!</p>
                        {props.children}
                        {/* handle form submit */}
                        <button type="button" className="btn btn-info" onClick={props.onClick}>Submit</button>
                        <a href="/books"><button type="button" className="btn btn-warning" >Go to Saved Books</button></a>

                    </div>
                </div>
            </div>
            <br></br>
        </div>

    )
}
export default Card;