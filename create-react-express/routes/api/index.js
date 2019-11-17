const router = require("express").Router(); 
const bookRoutes = require("./books"); 

//all the book routes
router.use("/books", bookRoutes); 

module.exports = router; 