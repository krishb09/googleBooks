//be able to get/post/delete from db
var db = require("../models"); 

//query calls to the db 
//using bookSchema model
//using "Book" since that's what our bookSchema is exported as

module.exports = {
    //get all books
    findAll: function (req, res){
        db.Book
        .find(req.query)
        //sort docs in descending order
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); 

    }, 

    //get book by its ID
    findById: function (req, res){
        db.Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); 
    }, 

    //add a new book
    create: function (req, res){
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); 
    }, 

    //update the preexisting book by its id 
    update: function(req, res){
        db.Book
        //need req.body b/c sending back body with info to the db
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }, 

    //delete a book from db
    remove: function(req, res){
        db.Book
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}; 


