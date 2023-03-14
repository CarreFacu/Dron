const MedicationService = require('../service/medicationService');
const Medication = require('../models/medicationSchema');

    class MedicationController {

        constructor() {
        }
    
        
    async findAll(req, res) {
        const listMedication = await MedicationService.findAll()
        res.send({status: "Ok", data: listMedication})
    }

    async findById  (req, res ){
        const med = await MedicationService.findById(req.params.id)
        res.send({ status: "Ok", data: med})
    }

    async createNew  (req, res ){
        const medication = new Medication({
            name: req.body.name,
            weight: req.body.weight,
            code: req.body.code,
            image: req.file.path,
          });
        const med = await MedicationService.create(medication)
        res.send({ status: "Ok", data: med})
    }

    async updateMedication (req, res ){
        const med = await MedicationService.update(req.params.id, req.body)
        res.send({ status: "Ok", data: med})
    }
    async deleteMedication  (req, res ){
        const med = await MedicationService.remove(req.params.id)
        res.send({ status: "Ok", data: med})
    }
    
}
module.exports = new MedicationController();