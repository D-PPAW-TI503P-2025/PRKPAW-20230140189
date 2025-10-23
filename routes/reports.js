const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const { addUserData, isAdmin } = require('../middleware/permissionMiddleware');

// Urutannya penting: addUserData dulu, baru isAdmin
router.get('/daily', [addUserData, isAdmin], reportController.getDailyReport);

module.exports = router;
