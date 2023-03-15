const express = require('express');
const router = express.Router()
const controller = require('../controller/dron');
const cron = require('node-cron');
const fs = require('fs');

cron.schedule('0 0 * * *',  async () => {
    try {
        const allDron = await controller.findAllCronJob()
        fs.appendFile('registro.log', JSON.stringify(allDron) + '\n', (err) => {
            if (err) throw err;
        });
    } catch (error) {
        throw error
    }
    });
router
    .get('/dron', controller.findAll)
    .get('/dron/:id', controller.findById)
    .get('/dronByState', controller.findByState)
    .post('/dron', controller.createNew)
    .put('/dron/:id', controller.addMedicationToDron)
    .put('/updateStateDron/:id', controller.updateStateDron)
module.exports = router;