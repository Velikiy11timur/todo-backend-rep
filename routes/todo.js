const express = require('express');
const router = express.Router();

const { CreateController } = require('../controllers/createController.js');
const { deleteTodoController } = require('../controllers/deleteTodoController.js');
const { updateTodoController } = require('../controllers/updateTodoController.js');

router.post('/create', CreateController);
//двоеточие означает что параметр может меняться
router.patch('/update/:id', updateTodoController);
router.delete('/deleteTodo/:id', deleteTodoController);

module.exports = router;