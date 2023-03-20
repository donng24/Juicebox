const express = require('express');
const tagsRouter = express.Router();
const tagsDB = require('../db/index');
const { getAllTags, getPostsByTagName } = require('../db');

tagsRouter.get('/', async (req, res) => {
    try {
        const tags = await tagsDB.getAllTags();
        res.json({ "tags": tags });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    const { tagName } = req.params;
    try {
        const posts = await getPostsByTagName(tagName);
        res.send({ posts });
    } catch ({ name, message }) {
        next({ name, message });
    }
});

module.exports = tagsRouter;