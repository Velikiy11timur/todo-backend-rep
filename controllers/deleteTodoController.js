/* 1. написать контроллер удаления.
   2, внутри контролера прочитать параметры строки (id)
   3. Использовать метод sequelize модели на удаление (destroy) с параметром выборки ({ where: ... })
   4. Подключить контроллер и проверить в postman */

// импортируем модель Todo из папки models
const { Todo } = require('../models')

//
const deleteTodoController = async (req, res) => {
  try {
    // находим id из параметров запроса
    const { id } = req.params;

    // метод возвращает все записи, которые смог изменить
    const deletedTodo = await Todo.destroy({
      where:{
        id: id
      }
    }) 
    
    if (deletedTodo) {
      res.status(200).end();
    } else {
      res.status(404).send('todo не найдено');
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports.deleteTodoController = deleteTodoController;