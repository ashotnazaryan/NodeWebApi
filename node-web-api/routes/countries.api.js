const express = require('express');
const countries = express.Router();

countries.get('/countries', (req, res, next) => {
    res.send({name: "Armenia"});
});

countries.post('/countries', (req, res, next) => {
    console.log(req.body);
    res.send({
        name: "a"
    });
});

module.exports = countries;

