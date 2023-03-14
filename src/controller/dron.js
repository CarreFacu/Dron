const DronService = require('../service/dronService');

    class DronController {

        constructor() {
        }
    
        
    async findAll(req, res) {
        const listDron = await DronService.findAll()
        res.send({status: "Ok", data: listDron})
    }

    async findById  (req, res ){
        const dron = await DronService.findById(req.params.id)
        res.send({ status: "Ok", data: dron})
    }

    async createNew  (req, res ){
        const dron = await DronService.create(req.body)
        res.send({ status: "Ok", data: dron})
    }

    async addMedicationToDron (req, res ){
        try{
            const medications = req.body.medication
            const dronById = await DronService.findById(req.params.id)
            const validateWeight = await DronService.validateWeight(dronById.medication, medications, dronById.weightLimit)
            if(validateWeight){
                for (let i = 0; i < medications.length; i++) {
                    dronById.medication.push(medications[i])
                }
                const dron = await DronService.update(req.params.id, dronById)
                res.send({ status: "Ok", data: dron})
            }
        }catch(err){
            throw err
        }

    }
    async deleteProducto  (req, res ){
        const dron = await DronService.remove(req.params.id)
        res.send({ status: "Ok", data: dron})
    }
    
}
module.exports = new DronController();