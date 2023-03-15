const express = require('express');
const router = express.Router()
const controller = require('../controller/dron');

router
    .get('/dron', controller.findAll)
    .get('/dron/:id', controller.findById)
    .get('/dronByState', controller.findByState)
    .post('/dron', controller.createNew)
    .put('/dron/:id', controller.addMedicationToDron)
    .put('/updateStateDron/:id', controller.updateStateDron)

module.exports = router;