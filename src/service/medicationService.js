const Medication = require('../models/medicationSchema');
const MongoCRUD = require('../repository/crud');

class MedicationService extends MongoCRUD {

    constructor() {
        super(Medication);
    }

}

module.exports = new MedicationService();