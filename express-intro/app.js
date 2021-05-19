// //import express module
// const express = require("express");

// // were calling express
// const app = express();

// // // "/hamster" we would have to go to localhost:3000/hamster to access and .get is a get request to server
// // app.get("/", function (request, response) {
// //   //.send will display on DOM
// //   //   response.send("Hello class");
// //   response.json({
// //     name: "hamster",
// //     friend: ["tommy", "geo", "john"],
// //     food: {
// //       food1: "candies",
// //       food2: "burger",
// //     },
// //   });
// // });

// app.get("/:product/:id", function (request, response) {
//   console.log(request.params);
//   response.json({
//     price: 100,
//     type: request.params.product,
//     id: request.params.id,
//   });
// });

// // app.get("/:teams", function (request, response) {
// //   console.log(request.params);
// //   let foundTeam = teams.map((item) => {
// //     if (request.params.teams === item.team) {
// //       return item;
// //     }
// //   });
// //   response.json({
// //     foundTeam,
// //   });
// // });
// app.listen(3000, function () {
//   console.log(`Server is running on PORT: ${3000}`);
// });

const express = require("express");

const logger = require("morgan");
const path = require("path");

const app = express();
console.log("path-------");

//shows complete path
console.log(__dirname);

//
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middleware
app.use(logger("dev"));

//parses json to become js object
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (request, response) {
  //response.send("Hello class");

  //renders file called index .render is an express method
  response.render("index");
  //   response.json({
  //     name: "hamster",
  //     friends: ["tommy", "geo", "john"],
  //     food: {
  //       food1: "candies",
  //       food2: "burgers",
  //     },
  //     boolean1: true,
  //     boolean2: false,
  //     number: 123,
  //   });
});

//makes creating dynamic
app.get("/:product/:id", function (request, response) {
  console.log(request.params);
  response.json({
    price: 100,
    type: request.params.product,
    id: request.params.id,
  });
});

app.post("/create-product", function (req, res) {
  console.log(req.body);
  res.json({
    data: req.body,
  });
});
app.listen(3000, function () {
  console.log(`Server is running on PORT: ${3000}`);
});
