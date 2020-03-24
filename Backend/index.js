const express = require('express')
const bodyParser = require('body-parser')
const { Service } = require('./sequelize')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

const port = 8001
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
app.get('/', (req, res) => {
    Service.findAll().then(users => {
        //res.render(users)
        res.send(users);
    })
})
app.post('/', (req, res) => {
    console.log("odebrano dane")
    Service.create({
        ServiceName: req.body.ServiceName
    })
})