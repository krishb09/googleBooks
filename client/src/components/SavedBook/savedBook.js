import React from 'react';

const SavedCard = props => {

    return (
        <div className="container">
            <div className="card mb-3">
                <img src={props.img} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="row">
                        <h4 className="card-title"> {props.title} </h4>
                    </div>
                    <div class="row">
                        <h5 className="card-subtitle"> Author: {props.author} </h5>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="card-text"> Published Date: {props.synopsis} </p>
                    </div>
                    <div className="row">
                        <a href={props.link} className="card-text"> Book Link</a>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-danger" onClick={props.onClick} >Delete Book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SavedCard;