const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Todo = require('./models/Todo');
const todoRoutes = require('./routes/todos');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/todos', todoRoutes);

// Sync Database
sequelize.sync({ alter: true }) // Pakai alter biar update table kalau ada perubahan model
  .then(() => {
    console.log('✅ Database synced');
    const PORT = process.env.PORT || 3000; // Render wajib pakai ini
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ Database sync failed:', err));