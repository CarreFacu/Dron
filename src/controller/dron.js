const DronService = require('../service/dronService');
const Dron = require('../models/dronSchema');

    class DronController {

        constructor() {
        }
    
        
    async findAll(req, res) {
        const listDron = await DronService.findAll()
        res.send({status: "Ok", data: listDron})
    }

    async findById  (req, res ){
        const dron = await DronService.findById(req.params.id)
        res.send({ status: '200', data: dron})
    }
    async findByState  (req, res ){
        try {
            const dron = await DronService.findAll(req.body)
            res.send({ status: '200', data: dron})
        } catch (error) {
            res.status(400).send(err);
        }

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
                res.send({ status: '200', data: dron})
            }
        }catch(err){
            res.status(400).send(err);
        }

    }
    async updateStateDron  (req, res ){
        const dronById = await DronService.findById(req.params.id)
        console.log(dronById.medication.length)
        if (dronById.bateryCapacity < 25 && req.body.state === "LOADING" ){
            console.log(dronById)
            if(dronById.medication.length == 0){
                res.send({ status: '400', Error: 'The status cannot be changed to loading if the drone has not been loaded with medicinesPlease recharge the drone'})
            }
            res.send({ status: '400', Error: 'Please recharge the drone'})
        }else {
            if(dronById.medication.length == 0){
                res.send({ status: '400', Error: 'The status cannot be changed to loading if the drone has not been loaded with medicinesPlease recharge the drone'})
            }
            dronById.state = req.body.state
            const updateDron = await DronService.update(req.params.id, dronById)
            res.send({ status: '200', data: updateDron})
        }

    }
    
}
module.exports = new DronController();