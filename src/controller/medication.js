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
        try{
            const medication = new Medication({
                name: req.body.name,
                weight: req.body.weight,
                code: req.body.code,
                image: req.file.path,
                });
            const med = await MedicationService.create(medication)
            res.send({ status: "Ok", data: med})
        }catch(err){
            res.send({ status: "Error"})
            throw err

        }
    }
    
}
module.exports = new MedicationController();