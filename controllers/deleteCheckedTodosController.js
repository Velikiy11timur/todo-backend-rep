const { Todo } = require('../models');

module.exports.deleteCheckedTodosController = async (req, res) => {
  try {
    const deletedCheckedTodos = await Todo.destroy(
      {
        where: {
          checked: true,
        },
      }
    )
    if (deletedCheckedTodos) {
      res.status(200).end();
    } else {
      res.status(404).send('Завершенные todo не найдены')
    }
  } catch (error) {
    res.status(500).json(error);
  }
}