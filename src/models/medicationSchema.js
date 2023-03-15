const mongoose = require('mongoose');
const medication = mongoose.Schema({
    name: { type: String,    
        validate: {
            validator: function(v) {
            return /^[A-Za-z0-9_-]+$/.test(v);
        },
            message: props => `${props.value} is not a valid name!`
        },require: true },
    weight: { type: Number, require: true },
    code: { type: String,         
        validate: {
            validator: function(v) {
            return /^[A-Z0-9_]+$/.test(v);
    },
        message: props => `${props.value} is not a valid code!`
    }, require: true},
    image: { type: String , require: true},
});

const Medication = mongoose.model('medication', medication);

module.exports = Medication;