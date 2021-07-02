//services
const userService = require('../services/userService');

module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({
		message: 'Buenisimo entramos en nuestra api',
	}));

	// Routes of Web Services
	// Users
	app.post('/api/users/create', userService.create);
	app.get('/api/users/list', userService.list);
	app.get('/api/users/find', userService.find);
    app.post('/api/users/update', userService.update);
};