const express = require('express');
const tagsRouter = express.Router();
const tagsDB = require('../db/index');
const { getAllTags } = require('../db');

tagsRouter.get('/', async (req, res) => {
    try {
      const tags = await tagsDB.getAllTags();
      res.json({ "tags": tags });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = tagsRouter;