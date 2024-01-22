console.log("Ready to start Web server");
const express = require("express");
const res = require("express/lib/response");
const app = express();

//MONGO DB connection
const db = require("./server").db();

//1-Entry Code
app.use(express.static("public")); //open Public folder for requested users
app.use(express.json()); //Converst from json format to Object
app.use(express.urlencoded({ extended: true})); //to access requested post from HTML form


//2-Session Code

//3-Views Code
app.set("views", "views");//views folder path that we created
app.set("view engine", "ejs");

//4-Router related Code
app.post("/create-item", (req, res) => {
  //TODO: code with db here
});

app.get("/", function(req, res){
  res.render("plan");
});


module.exports = app;