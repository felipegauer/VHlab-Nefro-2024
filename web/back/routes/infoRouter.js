const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoController')

router.get('/all',infoController.all)
router.get('/:exam',infoController.info)


module.exports = router;