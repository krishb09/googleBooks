import React, { Component } from "react";
import API from "../utils/API";
// import BookCard from "../components/BookCard/bookCard"; 
import Card from "../components/Card/Card"; 

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            books: [],
            title: "",
            synopsis: "",
            img: "",
            link: "",
            author: ""
        }
    }

    handleSearchInput = event => {
        this.setState({ search: event.target.value}); 
    };

    //onClick of submit button 
    handleFormSubmit = event => {
        console.log("clicked"); 
        //prevent from loading page right away
        event.preventDefault(); 
        API.searchBook(this.state.search)
            .then(res => {
                console.log(res.data.items);
                this.setState({ books: res.data.items }); 
            })
            .catch(err => this.setState({ error: err.message}));
    };

    //save the book
    handleSaveBook = event => {
        event.preventDefault(); 
        console.log("click"); 
        API.saveBook({
            title: event.title, 
            author: event.author, 
            synopsis: event.synopsis, 
            link: event.link, 
            img: event.img 
        })
        .then(res => alert("This book was added!")
        .catch(err => console.log(err))); 
    };

    render(){
        return (
            <div>
                <Card
                    handleSearchInput = {this.handleSearchInput}
                    handleFormSubmit = {this.handleFormSubmit}
                    books = {this.state.books}
                    onClick = {this.handleSaveBook}
                />
            </div>
        )
    }
}

export default Search; 