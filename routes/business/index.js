const business = require("express").Router();
const navbar = require("../../config/variables/business/navbar");
const section1 = require("../../config/variables/business/section1");
const section2 = require("../../config/variables/business/section2");
const section3 = require("../../config/variables/business/section3");
const section4 = require("../../config/variables/business/section4");
const footer = require('../../config/variables/business/footer');

business.get("/", (req, res) => {
  res.render("business", { navbar, section1, section2, section3, section4, footer });
});

module.exports = business;
