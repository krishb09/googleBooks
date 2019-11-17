import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card/Card"; 

class Books extends Component {
    state = {
        title = "",
        books = [],
        author = "",
        link = "", 
        synopsis = "", 
        img = "", 
    }

    componentDidMount(){
        //method called after elements of page are rendered
        //fetch data from API
        this.loadBooks(); 
    }

    loadBooks = () => {
        API.getBooks()
        .then(res => this.setState({ books: res.data}))
        .catch(err => console.log(err)); 
    }

    deleteBooks = id => {
        console.log(id)
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .cathc(err => console.log(err)); 
    }

    render(){
        return(
            <div className="container">
                {/* map the books and display in card component */}
                {this.state.books.map(book => (
                    <Card
                        id= {book._id}
                        title = {book.title}
                        author = {book.author}
                        synopsis = {book.synopsis}
                        img = {book.img}
                        link = {book.link}
                        >
                    </Card>
                ))}
            </div>
        );
    }
}