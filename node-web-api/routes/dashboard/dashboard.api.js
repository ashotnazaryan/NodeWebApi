module.exports = (app) => {

	app.get('/api/dashboard', (req, res, next) => {
		res.send("get dashboard");
	});

	app.post('/api/dashboard', (req, res, next) => {
		res.send("post dashboard");
	});

};