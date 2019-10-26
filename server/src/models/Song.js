module.exports = (sequelize, DataTypes) => {

	const Song = sequelize.define('Song', {
		title: DataTypes.STRING,
		artist: DataTypes.STRING,
		genre: DataTypes.STRING,
		album: DataTypes.STRING,
		albumImage: DataTypes.STRING,
		lyrics: DataTypes.TEXT,
		tab: DataTypes.TEXT,
	})


	return Song

} 
