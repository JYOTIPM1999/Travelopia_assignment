const express = require("express");
const {
  registerTravellers,
  getData,
} = require("../controllers/travellers.controller");

const app = express.Router();

app.post("/register", registerTravellers);
app.get("/getData", getData);

module.exports = app;
