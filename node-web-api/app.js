const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const api = require('./routes/api');

require('./routes/api')(app);

app.listen(process.env.PORT || 5000);

app.get('/', (req, res, next) => {
    res.send('App works!');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

