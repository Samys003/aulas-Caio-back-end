const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

//Rota para obter os usúarios
router.get('/', userController.getAllUsers);

// Rota para obter um usúario por ID
router.get('/:id', userController.getUserById);

//Rota para criar um novo usúario
router.post('/', userController.createUser);


module.exports = router;