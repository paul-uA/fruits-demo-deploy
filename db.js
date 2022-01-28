const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb://127.0.0.1:27017/fruitsTestDB'

mongoose.connect(MONGODB_URI)
const db = mongoose.connection
db.on('connected', ()=>console.log('connected to mongoDB'+MONGODB_URI))

module.exports = db