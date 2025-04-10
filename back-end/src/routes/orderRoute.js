const express = require('express');
const router = express.Router();
const {getAllOrders, getOrder, createOrder, deleteOrder, statusOrder } = require('../controllers/orderController');

router.get('getAllOrders', getAllOrders);
router.get('getOrder', getOrder);
router.post('createOrder', createOrder);
router.delete('deleteOrder', deleteOrder);
router.put('statusOrder', statusOrder)

module.exports = router;