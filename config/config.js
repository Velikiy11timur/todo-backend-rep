require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  test: {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: '',
  },
  production: {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: '',
  },
}