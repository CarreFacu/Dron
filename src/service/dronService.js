const Dron = require('../models/dronSchema');
const MongoCRUD = require('../repository/crud');
const medication = require('../models/medicationSchema');

class Dronervice extends MongoCRUD {

    constructor() {
        super(Dron);
    }
    async validateWeight(idArray, newArrayMedId, weightLimit) {
        let med 
        let totalWeight = 0
        let result = false 
        for (let i = 0; i < idArray.length; i++) {
            med = await medication.findById(idArray[i])
            totalWeight = totalWeight + med.weight

        }
        for (let i = 0; i < newArrayMedId.length; i++) {
            med = await medication.findById(newArrayMedId[i])
            if(med.weight + totalWeight >= weightLimit){
                throw new Error ('Maximum weight exceeded')
            }else{
                totalWeight = totalWeight + med.weight
                result = true
            }

        }
        return result

    }
}

module.exports = new Dronervice();