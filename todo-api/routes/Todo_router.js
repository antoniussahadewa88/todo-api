const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all
router.get('/', async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

// GET by ID
router.get('/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  res.json(todo);
});

// CREATE
router.post('/', async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json(todo);
});

// UPDATE
router.put('/:id', async (req, res) => {
  await Todo.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Updated' });
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Todo.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
});

module.exports = router;