const { createPost, updatePost, DeletePost, Getpost, GetAllPost } = require('../controllers/post');

const router = require('express').Router();

router.get('/',GetAllPost);
router.get('/:id',Getpost)
router.post('/',createPost);
router.put('/:id',updatePost)
router.delete('/:id',DeletePost)

module.exports = router;
