const express = require('express');
const router = express.Router();
const {getAllOrders, getOrder, createOrder, } = require('../controllers/orderController');

router.get('getAllOrders', getAllOrders);
router.get('getOrder', getOrder);
router.post('createOrder', createOrder);
router.delete('deleteOrder', deleteOrder);

module.exports = router;