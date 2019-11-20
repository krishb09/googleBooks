import React from 'react';


function Input(props) {
    return (
        <div className="form">
            <form>
                <input {...props}
                    type="book" className="form-control" id="inputBook" placeholder="Enter Book Name" ></input>
            </form>
            <br></br>
        </div>
    )
}

export default Input; 