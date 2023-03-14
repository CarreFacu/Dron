const express = require('express');
const router = express.Router()
const controller = require('../controller/dron');

router
    .get('/dron', controller.findAll)
    .get('/dron/:id', controller.findById)
    .post('/dron', controller.createNew)
    .put('/dron/:id', controller.addMedicationToDron)

module.exports = router;