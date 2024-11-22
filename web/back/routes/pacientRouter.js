const { Router } = require('express');
const pacientController = require('../controllers/pacientController');

const router = Router();
router.get('/:dataset/all', pacientController.getPacients)
router.get('/exams/:dataset/:codigo', pacientController.getPacientExam)
router.get('/:dataset/:codigo', pacientController.getPacient)


module.exports = router;