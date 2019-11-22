const router = require("express").Router(); 
const bookRoutes = require("./booksRoutes"); 

//all the book routes
router.use("/books", bookRoutes); 

module.exports = router; 