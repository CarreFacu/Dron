const mongoose = require('mongoose');
const medication = mongoose.Schema({
    name: { type: String, require: true },
    weight: { type: Number, require: true },
    code: { type: String, require: true},
    image: { type: String , require: true},
});

const Medication = mongoose.model('medication', medication);

module.exports = Medication;