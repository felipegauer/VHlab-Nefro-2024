const { Router } = require('express');
const datasetController = require('../controllers/datasetController');

const router = Router();
router.get('/:dataset/info', datasetController.info)
router.get('/:dataset/stats', datasetController.stats)
router.get('/all', datasetController.all)



module.exports = router;