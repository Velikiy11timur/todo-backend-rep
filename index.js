//require (импортируем) библиотеку express для работы
const express = require('express');
// объявляем константу для работы 
const app = express();

//require (импортируем) библиотеку cors для работы
const cors = require('cors');

//require (импортируем) routers
const todosRouter = require('./routes/todos.js');
const todoRouter = require('./routes/todo.js');

const PORT = 5000;

// настройка cors 
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
//явное преобразование express в json формат
app.use(express.json());
app.use('/todos', todosRouter);
app.use('/todo', todoRouter);

async function startApp() {
  try {
    await app.listen(PORT, () => console.log('SERVER STARTED ON PORT:' + PORT))
  } catch (e) {
    console.log(e);
  }
}

startApp()