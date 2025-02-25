const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoController')

router.post('/createupdate',infoController.create_update)
router.get('/all',infoController.all)
router.get('/:exam',infoController.info)


module.exports = router;