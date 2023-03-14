const mongoose = require('mongoose');
const dron = mongoose.Schema({
    model: { type: String, enum : ['Lightweight','Middleweight', 'Cruiserweight', 'Heavyweight'], },
    serialNumber: { type: Number, require: true, max: 100 },
    createAt: { type: Date, default: new Date() },
    weightLimit: { type: Number, require: true, max: 500 },
    bateryCapacity: { type: Number, require: true},
    state: { type: String, enum : ['IDLE','LOADING', 'DELIVERING', 'DELIVERED', 'RETURNING'], },
    medication: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'medication'
    }]
    
});

const Dron = mongoose.model('dron', dron);

module.exports = Dron;