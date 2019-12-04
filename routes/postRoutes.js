const express = require('express');

const router = express.Router();

const DBase = require('../data/db')

//1 POST for global posts
router.post('/', (req, res) => {
    const postInfo = req.body;
    if (!postInfo.title || !postInfo.contents) {
        res.send(400).json({ errorMessage: "Please provide title and contents for the post." })
    }
    else {
        DBase.insert(postInfo)
            .then(writing => {
                res.status(201).json(writing)
            })
            .catch(() => {
                res.status(500).json({ error: "There was an error while saving the post to the database" })
            })
    }
})

//2 -- POST for posts/:id/comments
router.post('/:id/comments', (req, res) => {
    const id = req.params.id
    const commentInfo = req.body
    DBase.findById(id)
    if (!id) {
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    }
    else if (!commentInfo) {
        res.status(400).json({ errorMessage: "Please provide text for the comment." })
    }
    else {
        DBase.insertComment(commentInfo)
            .then(comment => {
                res.status(201).json(comment)
            })
            .catch(() => {
                res.status(500).json({ error: "There was an error while saving the comment to the database" })
            })
    }
})

//3 -- GET for global posts
router.get('/', (req, res) => {
    DBase.find(req.query)
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(() => {
            res.status(500).json({ error: "The posts information could not be retrieved." })
        })
})

//4 -- GET for posts/:id
router.get('/:id', (req, res) => {
    const id = req.params.id
    DBase.findById(id)
        .then(found => {
            if (found) {
                res.status(200).json(found)
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            }
        })
        .catch(() => {
            res.status(500).json({ error: "The post information could not be retrieved." })
        })

})

//5 -- GET for posts/:id/comments
router.get('/:id/comments', (req, res) => {
    const id = req.params.id
    DBase.findPostComments(id)
        .then(found => {
            if (found) {
                res.status(200).json(found)
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            }
        })
        .catch(() => {
            res.status(500).json({ error: "The comments information could not be retrieved." })
        })
})


//6 -- DELETE for posts/:id
router.delete('/:id', (req, res) => {
    const id = req.params.id
    DBase.findById(id)
        .then(found => {
            if (found) {
                res.send(found)
            }
        })
    DBase.remove(id)
        .then(gone => {
            if (gone) {
                res.status(200).json({ message: "The post was deleted"})
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            }
        })
        .catch(() => {
            res.status(500).json({ error: "The post could not be removed" })
        })
})

//7 -- PUT for posts/:id
router.put('/:id', (req, res) => {
    const id = req.params.id
    const postInfo = req.body

    DBase.findById(id)
        .then(writing => {
            if (!writing) {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            } else {
                res.status(200).json(writing)
            }
        })
    if (!postInfo.title || !postInfo.contents) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    } else {
        DBase.update(id, postInfo)
            .then(postInfo => {
                res.status(200).json({ message: "Updated post", postInfo })
            })
            .catch(() => {
                res.status(500).json({ error: "The post information could not be modified." })
            })
    }
})

module.exports = router;