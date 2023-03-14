module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    SECRETJWT: process.env.SECRETJWT || 'secret',
    PORT: process.env.PORT || '8080',
    SESSION_SECRET: process.env.SESSION_SECRET || 'secret',

    MONGO_URL: 'mongodb://localhost:27017/dron' ,
}