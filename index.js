const express = require('express');
const app = express();
const { PORT } = require('./src/config/index.js')
require('./src/dataBase/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});

const medicationRouter = require('./src/routes/medication');
const dronRouter = require('./src/routes/dron');

app.use('/api', dronRouter);
app.use('/api', medicationRouter);

const server = app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}`);
});

server.on('error', error => {
    console.log('Server error:', error);
});
