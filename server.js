const express = require('express')
const app = express()
const PORT = 8000
require('./db')
const Fruit = require('./models/Fruit')
const fruitController = require('./controllers/fruits')

app.set('view-engine','ejs')

app.use(express.urlencoded({extended: false}))

app.use('/fruits',fruitController) 

app.get('/',(req,res)=>{
    Fruit.find({}).then(fruits=>{
        res.render('home.ejs',{fruits})
    }).catch(err=>res.send(err))
})

app.listen(PORT, ()=>console.log(`connected to app on ${PORT}`))
