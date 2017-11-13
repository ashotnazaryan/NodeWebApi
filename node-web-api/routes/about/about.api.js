module.exports = (app) => {

	app.get('/api/about', (req, res, next) => {
		res.send("about");
	});

	app.post('/api/about', (req, res, next) => {
		res.send("post about");
	});

};