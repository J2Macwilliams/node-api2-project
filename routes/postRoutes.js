const express = require('express');

const router = express.Router();

//1 POST for global posts
router.post('/' , (req, res) => {

})

//2 -- POST for posts/:id/comments
router.post('/:id/comments' , (req, res) => {

})

//3 -- GET for global posts
router.get('/' , (req, res) => {

})

//4 -- GET for posts/:id
router.get('/:id' , (req, res) => {

})

//5 -- GET for posts/:id/comments
router.get('/:id/comments' , (req, res) => {

})

//6 -- DELETE for posts/:id
router.delete('/:id' , (req, res) => {

})

//7 -- PUT for posts/:id
router.put('/:id' , (req, res) => {

})

module.exports = router;