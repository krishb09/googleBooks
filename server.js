var express = require("express");
var app = express();
var mongoose = require("mongoose");

var routes = require('./routes');
var path = require("path");
var PORT = process.env.PORT || 7425;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Connect to MongoDB >>googleBooks should be created, check robo3t
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// Require routes from controller
app.use(routes); 

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
