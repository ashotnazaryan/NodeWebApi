const express = require('express');
const router = express.Router();
const countries = require('./countries.api');
const cities = require('./cities.api');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

module.exports = [countries, cities];
