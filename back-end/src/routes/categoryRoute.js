const express = require('express');
const router = express.Router();
const {getAllCategory, getCategoryById, createCategory, updateCategoryById, deleteCategory } = require('../controllers/categoryController');

router.get('getAllCategory', getAllCategory);
router.get('getCategoryByID', getCategoryById);
router.post('createCategory', createCategory);
router.put('updateCategoryById', updateCategoryById)
router.delete('deleteCategory', deleteCategory);

module.exports = router;