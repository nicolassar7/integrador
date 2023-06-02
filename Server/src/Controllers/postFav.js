const {Favorite} = require('../DB_connection')

module.exports = async(res, req)=>{
    try{
        const {id, name, origin, status, image, species, gender} = req.body;
        if(!name || !origin || !status || !image || !species || !gender){
            return res.status(401).json({message: "faltan datos"})
        }
        await Favorite.findOrCreate({where: {name, origin, status, image, species, gender}})
        const allFavorite = await Favorite.findAll();
        return res.json(allFavorite);
    } catch(error){
        return res.status(500).send(error.message)
    }
}