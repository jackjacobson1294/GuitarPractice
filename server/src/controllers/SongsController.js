const {Song} = require('../models')


module.exports = {

	async index (req,res) {

		try{
			const songs = await Song.findAll({
				limit: 10
			})

			res.send(songs)
		}
		catch(err){ 
			req.status(500).send({
				error: "An error has occurred trying to get songs"
			})
		}
	},

	async post (req,res) {
		try{
			const song = await Song.create(req.body)
			res.send(song)
			
		}
		catch(err){
			req.status(500).send({
				error: "An error has occurred trying to create song"
			})
		}
	}	

}
