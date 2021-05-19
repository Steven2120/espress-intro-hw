//Step 1a initialize express by bringing in require express
const express = require("express");
//step 2a bringing in morgan
const logger = require("morgan");
//step 4 bringing in path by default - node give it to us
const path = require("path");
//Step 1b initialize express app
const app = express();
//step 2b use logger dev = development
app.use(logger("dev"));
//step 3 using express json
app.use(express.json());
//step 5 telling the app where to serve up static files
app.use(express.static(path.join(__dirname, "public")));
//step 4a tell where to find the views folder
app.set("views", path.join(__dirname, "views"));
//step 4b set view engine to use EJS
app.set("view engine", "ejs");
//step 6 setting up user and info
app.get("/", function (req, res) {
  res.render("index", {
    user: "Joe",
    info: ["like to read", "hangout", "eat a lot of food"],
  });
});
//step 7 rendering photos.ejs
app.get("/photo-fun", function (req, res) {
  res.render("photos");
});
//step 8 setting up path "/:pet/:age"
app.get("/:pet/:age", function (req, res) {
  //   res.json({ pet: req.params.pet, age: req.params.age });
  res.render("pets", { pet: req.params.pet, age: req.params.age });
});
//Step 1c start express server
app.listen(3000, function () {
  console.log("Server started in port 3000");
});
