import React from 'react';

const BookCard = props => {

    return (
        <div class="card mb-3">
            <img src= {props.img} className="card-img-top" alt="" />
            <div className="card-body">
                <div className="row">
                    <h4 className="card-title"> {props.title} </h4>
                    <h5 className= "card-subtitle"> Author: {props.author} </h5>
                </div>
                <hr />
                <div className = "row">
                    <p className="card-text"> {props.synopsis} </p>
                    <a href= {props.link} className="card-text"> Book Link</a>
                </div>
            </div>
        </div>
    )
}
export default BookCard;

