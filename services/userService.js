const Sequelize = require('sequelize');
const usuarios = require('../models').user;

module.exports = {

	/**
	 * Create a new user validate before if not exists
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	create(req, res) {
		return usuarios
			.findOrCreate({
				where: {
					username: req.body.username,
				},
                defaults: {
                    username: req.body.username,
                    password: req.body.password,
                    tipo: req.body.tipo,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    du: req.body.du,
                    domicilio: req.body.domicilio,
                    telefono: req.body.telefono,
                    status: true
                }

			})
			.then(usuarios => res.status(200).send({"codigo":"200", "mensaje":"User creado con exito"}))
			.catch(error => res.status(400).send(error))
	},
	/**
	 * Update users
	 * 
	 * @param {*} req
	 * @param {*} res 
	 */

    update(req, res) {
		return usuarios
			.update({
                
                    username: req.body.username,
                    password: req.body.password,
                    tipo: req.body.tipo,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    du: req.body.du,
                    domicilio: req.body.domicilio,
                    telefono: req.body.telefono,
                    status: req.body.status
            },{
				where: {
					username: req.body.username,
				}

			})
			.then(usuarios => res.status(200).send({"codigo":"200", "mensaje":"User modificado"}))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Find all users
	 * 
	 * @param {*} _ 
	 * @param {*} res 
	 */
	list(_, res) {
		return usuarios
			.findAll({})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Find one user in the table users
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	find(req, res) {
		return usuarios
			.findOne({
				where: {
					username: req.body.username
				}
			})
			.then(usuarios => res.status(200).send(usuarios != null ? usuarios : {}))
			.catch(error => res.status(400).send(error))
	},

	/**
	 * Login user
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
		login(req, res) {
			return usuarios
				.findOne({
					where: {
						username: req.body.username,
						password: req.body.password
					}
				})
				.then(usuarios => res.status(200).send(usuarios!=null ? "Ok" : "Invalido"))
				.catch(error => res.status(400).send(error))
		}
}