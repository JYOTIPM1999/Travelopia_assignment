const express = require("express");
const registerTravellers = require("../controllers/travellers.controller");

const app = express.Router();

app.post("/register", registerTravellers);

module.exports = app;
