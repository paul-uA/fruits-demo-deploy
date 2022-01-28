const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGO_URI ||'mongodb+srv://PaulPablo:7yhzTZNVUrxFbPF@cluster0.dzipt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI)
const db = mongoose.connection
db.on('connected', ()=>console.log('connected to mongoDB'+MONGODB_URI))

module.exports = db