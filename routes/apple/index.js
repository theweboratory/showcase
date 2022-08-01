const apple = require("express").Router();
const navbar = require("../../config/variables/apple/navbar");
const section1 = require("../../config/variables/apple/section1");
const section2 = require("../../config/variables/apple/section2");
const section3 = require("../../config/variables/apple/section3");
const section4 = require("../../config/variables/apple/section4");
const section5 = require("../../config/variables/apple/section5");
const footer = require('../../config/variables/apple/footer');

apple.get("/", (req, res) => {
  res.render("apple", {
    navbar,
    section1,
    section2,
    section3,
    section4,
    section5,
    footer,
  });
});

module.exports = apple;
