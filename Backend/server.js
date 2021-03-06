const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { Customer, Address } = require('./sequelize')

const app = express()

const corsOptions = {
    origin: 'http://localhost:8001'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//app.use(express.static(path.join(__dirname, './build')))


//app.use(express.json())
/*
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'frontend/build/index.html'))
})
*/
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to application!'})
})

// routes
require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)
require('./routes/workshop.routes')(app)
require('./routes/vehicle.routes')(app)
require('./routes/visit.routes')(app)
require('./routes/workshopopenhours.routes')(app)
require('./routes/offeredservices.routes')(app)
require('./routes/comment.routes')(app)

const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})
/*
app.post('/', (req, res) => {
    console.log("odebrano dane")
    Service.create({
        ServiceName: req.body.ServiceName
    })
})
*/