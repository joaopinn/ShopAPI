const express = require('express');
const router = express.Router();
const { getAllSubCategory, getSubCategory, updateSubCategory, deleteSubCategory } = require('../controllers/subCategoryController');

router.get('getAllSubCategory', getAllSubCategory);
router.get('getSubCategory', getSubCategory);
router.post('createSubCategory', createSubCategory);
router.put('updateSubCategory', updateSubCategory);
router.delete('deleteSubCategory', deleteSubCategory);

module.exports = router;