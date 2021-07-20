//services
const userService = require('../services/userService');
const categoriasService = require('../services/categoriasService');
const mediosDePagoService = require('../services/mediosDePago');
const productosService = require('../services/productosService');
const transaccionesService = require('../services/transaccionesService');

module.exports = (app) => {

    app.get('/api', (req, res) => {
    	res.status(200).send({
			message: 'Buenisimo entramos en nuestra api',
		})
    });

	// Routes of Web Services
	// Users
	app.post('/api/users/create', userService.create);
	app.get('/api/users/list', userService.list);
	app.get('/api/users/find', userService.find);
    app.post('/api/users/update', userService.update);
	app.post('/api/users/login', userService.login);

	// Category
	app.post('/api/category/create', categoriasService.create);
	app.get('/api/category/list', categoriasService.list);
	app.get('/api/category/find', categoriasService.find);
    app.post('/api/category/update', categoriasService.update);

	// Medios Pago
	app.post('/api/mediospago/create', mediosDePagoService.create);
	app.get('/api/mediospago/list', mediosDePagoService.list);
	app.get('/api/mediospago/find', mediosDePagoService.find);
    app.post('/api/mediospago/update', mediosDePagoService.update);

	// Productos
	app.post('/api/product/create', productosService.create);
	app.get('/api/product/list', productosService.list);
	app.get('/api/product/find', productosService.find);
    app.post('/api/product/update', productosService.update);

	// Transacciones
	app.post('/api/transaction/create', transaccionesService.create);
	app.get('/api/transaction/list', transaccionesService.list);
	app.get('/api/transaction/find', transaccionesService.find);
};