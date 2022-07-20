const foods = require("express").Router();
const navbar = require('../../config/variables/foods/navbar');
const section1 = require("../../config/variables/foods/section1");
const section2 = require("../../config/variables/foods/section2");
const gallery = require('../../config/variables/foods/gallery');



foods.get("/", (req, res) => {
  res.render("foods", { navbar, section1, section2, gallery });
});

module.exports = foods;
