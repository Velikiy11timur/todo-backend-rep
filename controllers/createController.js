const { Todo } = require('../models');

module.exports.CreateController = async (req, res, next) => {
  try {
    const { body } = req;

    const todo = await Todo.create(body);

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error
    })
  }
};
