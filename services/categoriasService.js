const categorias = require('../models').categoria;

module.exports = {

	/**
	 * @param {*} req 
	 * @param {*} res 
	 */
	create(req, res) {
        return categorias
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
		return categorias
			.update({
                
                    nombre: req.body.nombre
            },{
				where: {
					nombre: req.body.nombre,
				}

			})
			.then(categorias => res.status(200).send({"codigo":"200", "mensaje":"Categoria modificada"}))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * @param {*} _ 
	 * @param {*} res 
	 */
	list(_, res) {
		return categorias
			.findAll({
                where:{
                    status:true
                }
            })
			.then(categorias => res.status(200).send(categorias))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * @param {*} req 
	 * @param {*} res 
	 */
	find(req, res) {
		return categorias
			.findOne({
				where: {
					nombre: req.body.nombre,
                    status:true
				}
			})
			.then(categorias => res.status(200).send(categorias!=null ? categorias : {}))
			.catch(error => res.status(400).send(error))
	}
}   