//require express по стандарту
const express = require('express');
//создаём экземпляр роутера методом Router()
const router = express.Router();

/* import controller functions(callback)*/
const { GetTodosController } = require('../controllers/getTodosController.js');
const { deleteCheckedTodosController } = require('../controllers/deleteCheckedTodosController.js');
const { checkAllController } = require('../controllers/checkAllController.js');

/* todos listing */
router.get('/getTodos', GetTodosController);
router.delete('/deleteChecked', deleteCheckedTodosController);
router.patch('/checkAllTodos', checkAllController);

module.exports = router;