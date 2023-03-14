// module of connection to the database.
const mongoose = require('mongoose');
const { MONGO_URL } = require('../config')

const connection = mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - connected in:', MONGO_URL);
});

mongoose.connection.on('error', (err) => {
    console.log('[Mongoose] - error:', err);
});

module.exports = connection;