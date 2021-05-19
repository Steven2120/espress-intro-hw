const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

let teamArray = [
  {
    id: uuidv4(),
    name: "lakers",
  },
  {
    id: uuidv4(),
    name: "knicks",
  },
  {
    id: uuidv4(),
    name: "nets",
  },
];
router.get("/", function (req, res) {
  console.log("req.query: ");
  console.log(req.query);

  if (req.query.name) {
    let foundTeam;

    teamArray.forEach((item) => {
      if (item.name === req.query.name) {
        foundTeam = item;
      }
    });

    if (!foundTeam) {
      res.json({ message: "Team not found" });
    } else {
      //returns only specific data
      res.json({ foundTeam });
    }
  } else {
    res.json({ data: teamArray });
  }
});

router.get("/get-team-by-id/:id", function (req, res) {
  //converted to a number because the incoming data is a string
  // this is before uuid because we have to convert the id to a number
  //   const id = Number(req.params.id);

  //uuidv4 version
  const id = req.params.id;

  //initialize a foundTeam variable
  let foundTeam;

  //looping through the array of TeamArray
  teamArray.forEach((item) => {
    //checking if item.id equals to id
    if (item.id === id) {
      //set foundTeam to item
      foundTeam = item;
    }
  });
  //if no team is found
  if (!foundTeam) {
    //send a message back
    res.json({
      message:
        "The team ID you are looking for does not exists please check ID",
    });
  } else {
    //send found team back
    res.json({
      foundTeam,
    });
  }
});

router.get("/get-team-by-name/:name", function (req, res) {
  const name = req.params.name;

  let foundTeam;

  teamArray.forEach((item) => {
    if (item.name === name) {
      foundTeam = item;
    }
  });

  if (!foundTeam) {
    res.json({
      message: "Team name not found",
    });
  } else {
    res.json({
      foundTeam,
    });
  }
});

router.post("/create-team", function (req, res) {
  let newTeamObj = {
    id: uuidv4(),
    name: req.body.name,
  };

  teamArray.push(newTeamObj);

  res.json({ teamArray });
});

module.exports = router;
