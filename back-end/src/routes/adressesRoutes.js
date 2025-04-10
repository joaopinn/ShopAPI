const express = require('express');
const router = express.Router();
const {getAdresses, createAdresses, updateAdresses, deleteAdresses} = require('../controllers/adressesController');

router.get('getAdresses', getAdresses);
router.post('createAdresses', createAdresses);
router.put('updateAdresses', updateAdresses);
router.delete('deleteAdresses', deleteAdresses);


module.exports = router;