const { Todo } = require('../models');

module.exports.updateTodoController = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    //метод вернет все обновленные todo до которых дотянется, по id дотянется либо до 1 либо не дотянется вовсе 
    const updatedTodo = await Todo.update(
      body, {where: {id: id}}
    )

    if (updatedTodo) {
      res.status(200).end();
    } else {
      res.status(404).send('По id ничего не найдено');
    }
   
  } catch (error) {
    res.status(500).json(error);
  }
}