const { createPost, updatePost, DeletePost, Getpost } = require('../controllers/post');

const router = require('express').Router();

router.get('/:id',Getpost)
router.post('/',createPost);
router.put('/:id',updatePost)
router.delete('/:id',DeletePost)

module.exports = router;
