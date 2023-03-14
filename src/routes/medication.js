const express = require('express');
const router = express.Router()
const controller = require('../controller/medication');
const multer = require('../middlewares/muter')
router
    .get('/medication', controller.findAll)
    .get('/medication/:id',  controller.findById)
    .post('/medication', multer.single('image') ,controller.createNew)
    .put('/medication/:id',  controller.updateMedication)
    .delete('/medication/:id',  controller.deleteMedication)

module.exports = router;