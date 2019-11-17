const router = require("express").Router(); 
const booksController = require("../../controllers/booksController.js"); 

//this file connects the routes to the db methods that were created
//match with /api/books 
router.route("/")
//use booksController to access the methods made to query the db 
    .get(booksController.findAll)
    .post(booksController.create); 

//match with /api/books/:id
//for a specific book 

router.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router; 