
const userModel = require('../model/userModel');


//Controlador par listar todos os usuarios 
const getAllUSers = (req, res) => {
    const users = userModel.findAll();
    res.status(200).json9(users);
    
}

module.exports = {
    getAllUSers
}

