const express = require("express");

const logger = require("morgan");

const path = require("path");

const teamRouter = require("./routes/teamRouter");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

//middleware
app.use(logger("dev"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use("/api/team", teamRouter);

app.listen(3000, function () {
  console.log(`Server is running on PORT: ${3000}`);
});
