const {Favorite} = require('../DB_connection')

module.exports = async(res,req)=>{
    try{
        const {id} = req.params;
        await Favorite.destroy({where: {id}})

        const allFavorite = await Favorite.findAll();
        return res.json(allFavorite);
    } catch(error){
        return res.json(500).send(error.message);
    }
}