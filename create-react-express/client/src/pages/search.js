import React, { Component } from "react";
import API from "../utils/API";
import BookCard from "../components/BookCard/bookCard"; 
import Card from "../components/Card/Card"; 
import Input from "../components/Input/Input"; 
import SavedCard from "../components/SavedBook/savedBook"; 

class Search extends Component {
        state = {
            search: "",
            books: []
        }

    handleSearchInput = event => {
        const {name, value} = event.target

        this.setState({ [name]: value}); 
    };

    //onClick of submit button 
    handleFormSubmit = e => {
        console.log("handle form submit"); 
        //prevent from loading page right away
        e.preventDefault(); 

        API.searchBook(this.state.search)
            .then(res => {
                console.log(res);

                this.setState({ books: res.data.items }); 
                console.log(this.state.books); 
            })
            .catch(err => this.setState({ error: err.message}));

      
    };



    deleteBooks = id => {
        console.log(id)

        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err)); 
    }

    //save the book
    handleSaveBook = (title, author, synopsis, link) => {
        // event.preventDefault(); 
        console.log("handle save book"); 
        console.log(title, author, synopsis, link)
        console.log(this.state.search)
        API.saveBook({
            title: title, 
            author: author, 
            synopsis: synopsis,
            link: link
        })
        .then(data => alert("This book was added!"))
        .catch(err => console.log(err)); 
    };



    render(){
        
        return (
            
            <div>
                <Card
                    books = {this.state.books}
                    onClick = {this.handleFormSubmit}
                >
                <Input 
                    name="search"
                    onChange = {this.handleSearchInput}
                    // value = {this.state.search}

                />
                </Card>
                                
                {this.state.books.map(book => (
                    <BookCard
                        key = {book._id}
                        id= {book._id}
                        title = {book.volumeInfo.title}
                        author = {book.volumeInfo.authors}
                        synopsis = {book.volumeInfo.publishedDate}
                        img = {book.img}
                        link = {book.volumeInfo.previewLink}
                        onClick = {() => this.deleteBooks(book._id)}
                        onSave = {() => this.handleSaveBook(book.volumeInfo.title, book.volumeInfo.authors[0], book.volumeInfo.publishedDate, book.volumeInfo.previewLink)}
            
                    />
                ))} 

            </div>
        )
    }
}

export default Search; 