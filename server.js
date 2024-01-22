console.log("Ready to start Web server");
const express = require("express");
const app = express();
const http = require("http");

//1-Entry Code
app.use(express.static("public")); //open Public folder for requested users
app.use(express.json()); //Converst from json format to Object
app.use(express.urlencoded({ extended: true})); //to access requested post from HTML form


//2-Session Code

//3-Views Code
app.set("views", "views");//views folder path that we created
app.set("view engine", "ejs");

//4-Router related Code
app.get("/", function(req, res){
  res.end(`<h1>HELLO WORLD</h1>`);
});
const server = http.createServer(app);
let PORT = 3001;
server.listen(PORT, function() {
console.log(`The server successfully run on PORT: ${PORT}`)
});
