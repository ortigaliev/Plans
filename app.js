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
  console.log("user entered /create-item");
  console.log(req.body);
  const new_plan = req.body.plan;
  db.collection("aim").insertOne({ plan: new_plan}, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      res.end("successfully added");
    }
  });
});

app.get("/", function(req, res){
  console.log("user entered /");
  db.collection("aim").find().toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      res.render("plan", {items: data});
    }
  });
});


module.exports = app;