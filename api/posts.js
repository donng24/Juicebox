const express = require('express');
const postsRouter = express.Router();
const { getAllPosts } = require('../db/index');

postsRouter.get('/', (req, res) => {
    getAllPosts()
        .then((posts) => {
            res.json({ "posts": posts });
    })
        .catch((err) => {
            res.status(500).json({ error: err.message });
    });
});
    
module.exports = postsRouter;