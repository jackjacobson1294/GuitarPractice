const Joi = require('joi')
module.exports = {
	register(req, res, next){
		const schema = {
			email: Joi.string().email(),
			password: Joi.string().regex(
				new RegExp('^[a-zA-Z0-9]{8,32}$')
			)
		}

		const {error} = Joi.validate(req.body, schema)
		//const {error,value} = Joi.validate(req.body, schema)
		if (error){
			switch (error.details[0].context.key){
				case 'email':
					res.status(400).send({
						error: 'You must provide a valid email address.'
					})
					break

				case 'password':
					res.status(400).send({
						error: `1. Password must contain ONLY lower case, upper case and numerics <br>
						2. Password must be at least 8 characters long and not greater than 32 characters
						`
					})
					break
				default:
				res.status(400).send({
					error: 'Invalid registration information.'
				})
			}

		} else{
			next()
		}
	}
}