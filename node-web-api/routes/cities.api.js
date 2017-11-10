const express = require('express');
const cities = express.Router();

cities.get('/cities', (req, res, next) => {
    res.send({name: "Yerevan"});
});

cities.post('/cities', (req, res, next) => {
    console.log(req.body);
    res.send({
        name: "y"
    });
});

module.exports = cities;

