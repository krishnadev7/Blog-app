const { createCategory, getCategory } = require('../controllers/category');

const router = require('express').Router();

router.post('/',createCategory);
router.get('/',getCategory);

module.exports = router;


