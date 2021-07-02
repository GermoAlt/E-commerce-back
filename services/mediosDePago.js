const mediosDePago = require('../models').mediosDePago;

module.exports = {

	/**
	 * @param {*} req 
	 * @param {*} res 
	 */
	create(req, res) {
		return mediosDePago
			.findOrCreate({
				where: {
					nombre: req.body.nombre,
				},
                defaults: {
                    nombre: req.body.nombre,
					status:true
                }

			})
			.then(mediosDePago => res.status(200).send({"codigo":"200", "mensaje":"Categoria creada con exito"}))
			.catch(error => res.status(400).send(error))
	},
	/**
	 * @param {*} req
	 * @param {*} res 
	 */

    update(req, res) {
		return mediosDePago
			.update({
                
                    nombre: req.body.nombre
            },{
				where: {
					nombre: req.body.nombre,
				}

			})
			.then(mediosDePago => res.status(200).send({"codigo":"200", "mensaje":"Categoria modificada"}))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * @param {*} _ 
	 * @param {*} res 
	 */
	list(_, res) {
		return mediosDePago
			.findAll({
				status:true
			})
			.then(mediosDePago => res.status(200).send(mediosDePago))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * @param {*} req 
	 * @param {*} res 
	 */
	find(req, res) {
		return mediosDePago
			.findOne({
				where: {
					nomnbre: req.body.nombre,
					status:true
				}
			})
			.then(mediosDePago => res.status(200).send(mediosDePago!=null ? mediosDePago : {}))
			.catch(error => res.status(400).send(error))
	}
}