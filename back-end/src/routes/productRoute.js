const express = require('express');
const router = express.Router();
const {getAllProduct, getProduct,createProduct,updateProduct, deleteProduct} = require('../controllers/productController');

router.get('getAllProduct', getAllProduct);
router.get('getProduct', getProduct);
router.post('createProduct', createProduct);
router.put('updateProduct', updateProduct);
router.delete('deleteProduct', deleteProduct);

module.exports = router;