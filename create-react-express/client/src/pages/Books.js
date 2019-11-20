import React, { Component } from "react";
import API from "../utils/API";
// import Card from "../components/Card/Card"; 
import BookCard from "../components/BookCard/bookCard"; 

class Books extends Component {
    state = {
        books:  ["pride and p", "hamlet", "sherlock"],
        title: "",
        author: "",
        link: "", 
        synopsis: "", 
        img: "", 
    };
    

    componentDidMount(){
        //method called after elements of page are rendered
        //fetch data from API
        // this.loadBooks(); 
     
    }

    loadBooks = () => {
        API.getBooks()
        .then(res => this.setState({ books: res.data, title: "", author: "", synopsis: "", link: "", img: ""}))
        .catch(err => console.log(err)); 
    }

    deleteBooks = id => {
        console.log(id)

        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err)); 
    }
    

    render(){
        // var data = Array.from(this.state.books)
        // console.log(data); 
        return(
            <div className="container">
                
                 {this.state.books.map(book => (
                    <BookCard
                        key = {book._id}
                        id= {book._id}
                        title = {book.title}
                        author = {book.author}
                        synopsis = {book.synopsis}
                        img = {book.img}
                        link = {book.link}
                        onClick = {() => this.deleteBooks(book._id)}
            
                    />
                ))} 
            </div>
        );
    }
}

export default Books; 