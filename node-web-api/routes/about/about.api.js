module.exports = (app) => {

	// const bodyParser = require('body-parser');
	// app.use(bodyParser.urlencoded({ extended: true }));
	// app.use(bodyParser.json());

	app.get('/api/about', (req, res, next) => {
		res.send("about");
	});

};