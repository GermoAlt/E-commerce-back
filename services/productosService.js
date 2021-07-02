const productos = require('../models').producto;

module.exports = {

	/**
	 * Create a new user validate before if not exists
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	create(req, res) {
		return productos
			.findOrCreate({
				where: {
					name: req.body.name,
				},
                defaults: {
                    name: req.body.name,
                    code: req.body.code,
                    image: req.body.image,
                    price: req.body.price,
                    category: req.body.category,
                    quantity: req.body.quantity,
                    description: req.body.description,
                    longDescription: req.body.longDescription,
                    status: true
                }

			})
			.then(productos => res.status(200).send({"codigo":"200", "mensaje":"Producto creado con exito"}))
			.catch(error => res.status(400).send(error))
	},
	/**
	 * Update users
	 * 
	 * @param {*} req
	 * @param {*} res 
	 */

    update(req, res) {
		return productos
			.update({
                name: req.body.name,
                code: req.body.code,
                image: req.body.image,
                price: req.body.price,
                category: req.body.category,
                quantity: req.body.quantity,
                description: req.body.description,
                longDescription: req.body.longDescription,
                status: req.body.status
            },{
				where: {
					name: req.body.name,
				}

			})
			.then(productos => res.status(200).send({"codigo":"200", "mensaje":"Producto modificado"}))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Find all users
	 * 
	 * @param {*} _ 
	 * @param {*} res 
	 */
	list(_, res) {
		return productos
			.findAll({
                status:true
            })
			.then(productos => res.status(200).send(productos))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Find one user in the table users
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	find(req, res) {
		return productos
			.findOne({
				where: {
					name: req.body.name,
                    status:true
				}
			})
			.then(productos => res.status(200).send(productos =!null ? productos : {}))
			.catch(error => res.status(400).send(error))
	}

}