const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Todo = require('./models/Todo');
const todoRoutes = require('./routes/todos');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/todos', todoRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});