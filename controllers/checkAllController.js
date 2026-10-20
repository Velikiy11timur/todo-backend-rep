//деструктурируем модель Todo из папки models для работы
const { Todo } = require('../models/');

module.exports.checkAllController = async (req, res) => {
  try {
    //обновляем тело запроса где поле checked:false
    const checkAllTodos = await Todo.update(
      {checked: true},
      {
        where:{
          checked:false
        }
      }
    );
    if (checkAllTodos) {
      res.status(200).end();
    } else {
      res.status(404).send('No unchecked todos');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};