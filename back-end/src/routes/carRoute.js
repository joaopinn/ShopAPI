const express = require('express');
const router = express.Router();
const {getCar, addProductInCar, addItemOfProduct, deleteItemCar, cleanCar, } = require('../controllers/carController');

router.get('getCar', getCar);
router.post('addProductInCar', addProductInCar);
router.put('addItemOfProduct', addItemOfProduct);
router.delete('deleteItemCar', deleteItemCar);
router.post('cleanCar', cleanCar);


module.exports = router;