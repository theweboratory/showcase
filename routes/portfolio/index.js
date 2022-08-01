const portfolio = require('express').Router();

portfolio.get('/', (req, res) => {
    res.render('portfolio');
})

module.exports = portfolio;
