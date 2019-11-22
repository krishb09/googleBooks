import axios from "axios"; 
// import apiKey from "../config/apikey.js"

//use google books url---volumes 
const url = "https://www.googleapis.com/books/v1/volumes?q="; 


//use axios to start using google books API
//need to create these methods to access
export default {
    //initial search for a book
    searchBook: function(query){
        console.log("api is working")
        console.log(url + query)
        //use apikey
        return axios.get(url + query );
    },

    //save/post book to db 
    saveBook: function(bookData){
        //post to the specific api route
        //send the res.body.data back to the backend 
        return axios.post("/api/books", bookData); 
    },

    //get ALL books from the db 
    getBooks: function (){
        return axios.get("/api/books"); 
    },

    //get specific book from the db 
    getOneBook: function (id){
        return axios.get("/api/books/" + id); 
    },

    //delete book from the db 
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id); //might have to do "id"
    }
};

