const express = require('express');
const router = express.Router();
const {getAllUsers, getUser, createUser, deleteUser, updateUser} = require('../controllers/userController');

router.get('getAllUsers', getAllUsers);
router.get('getUser', getUser);
router.post('createUser', createUser);
router.put('updateUser', updateUser);
router.delete('deleteUser', deleteUser);

module.exports = router;