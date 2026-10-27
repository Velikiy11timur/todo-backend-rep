const { Todo } = require('../models');

module.exports.GetTodosController = async (req, res, next) => {
  try {
    const todos = await Todo.findAll({
      order: [
        ['createdAt', 'ASC'],
      ]
    });

    res.status(200).json({
      todos,
    })
  } catch (error) {
    console.log(error);
    
    res.status(500).json();
  }
}