const transacciones = require('../models').transaccion;

module.exports = {

	/**
	 * @param {*} req 
	 * @param {*} res 
	 */
	create(req, res) {
        return transacciones
		  .findOrCreate({
				where: {
					nombre: req.body.nombre,
				},
                defaults: {
                    nombre: req.body.nombre,
                    status:true
                }

			})
            .then(res.status(200).send({"codigo":"200", "mensaje":"Categoria creada"}))
            .catch(res.status(400).send({error}))
	},
	/**
	 * @param {*} req
	 * @param {*} res 
	 */

    update(req, res) {
		return transacciones
			.update({
                
                    nombre: req.body.nombre
            },{
				where: {
					nombre: req.body.nombre,
				}

			})
			.then(transacciones => res.status(200).send({"codigo":"200", "mensaje":"Categoria modificada"}))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * @param {*} _ 
	 * @param {*} res 
	 */
	list(_, res) {
		return transacciones
			.findAll({
                where:{
                    status:true
                }
            })
			.then(transacciones => res.status(200).send(transacciones))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * @param {*} req 
	 * @param {*} res 
	 */
	find(req, res) {
		return transacciones
			.findOne({
				where: {
					nombre: req.body.nombre,
                    status:true
				}
			})
			.then(transacciones => res.status(200).send(transacciones!=null ? transacciones : {}))
			.catch(error => res.status(400).send(error))
	}
}   