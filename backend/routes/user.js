const { GetUser, Update, Delete } = require('../controllers/users');

const router = require('express').Router();

router.get('/:id',GetUser)
router.put('/:id', Update);
router.delete('/:id', Delete);

module.exports = router;
