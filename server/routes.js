const router = require('express').Router();
const requestHandler = require('./request-handler');

router.get('/posts/:id', requestHandler.getPosts);

module.exports = router;
