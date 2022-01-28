const express = require("express");
const Fruit = require("../models/Fruit");
const router = express.Router();

router.post("/", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.create(req.body)
    .then((newFruit) => {
      console.log(newFruit.name + " created.");
      res.redirect("/");
    })
    .catch((err) => res.send(err));
});
module.exports = router;
