const express = require('express');

const router = express.Router();

//1 POST for global posts
router.post('/' , (req, res) => {

})

//2 -- POST for posts/:id/comments
router.post('/' , (req, res) => {

})

//3 -- GET for global posts
router.get('/' , (req, res) => {

})

//4 -- GET for posts/:id
router.get('/' , (req, res) => {

})

//5 -- GET for posts/:id/comments
router.get('/' , (req, res) => {

})

//6 -- DELETE for posts/:id
router.delete('/' , (req, res) => {

})

//7 -- PUT for posts/:id
router.put('/' , (req, res) => {

})

module.exports = router;