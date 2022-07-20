const creative = require("express").Router();
const navbar = require("../../config/variables/creative/navbar");
const section1 = require('../../config/variables/creative/section1');
const section2 = require('../../config/variables/creative/section2');
const section3 = require('../../config/variables/creative/section3');
const section4 = require('../../config/variables/creative/section4');

creative.get("/", (req, res) => {
  res.render("creative", { navbar, section1, section2, section3, section4 });
});

module.exports = creative;
