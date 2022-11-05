const Category = require('../model/categoryModel')


// Creating Category
const createCategory = async(req,res) => {
    try {
        const newCategory = new Category(req.body);
        const saveCategory = await newCategory.save();
        res.status(200).json(saveCategory);
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get Category
const getCategory = async (req,res) => {
    try {
        const category = await Category.find();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {createCategory,getCategory}