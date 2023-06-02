const {User} = require('../DB_connection');

module.exports = async(res,req)=>{
    try{
        
        const {email, password} = req.querry
        if(!email || !password) return res.status(400).send("Faltan datos")

        const user = await User.findOne({where: {email}})
        if (!user) return res.status(404).send("Usuario no encontrado");

        return user.password === password
        ? res.json({ access: true })
        : res.status(403).send("Contraseña incorrecta")

    } catch(error){
        return res.status(500).json(error.message)
    }
}