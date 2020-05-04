const { authJwt } = require('../middleware')
const controller = require('../controllers/vehicle.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        )
        next()
    })

    app.get('/vehicle/all', controller.allVehicles)

    app.get('/vehicle/:id', controller.oneVehicle)

    app.post('/vehicle/new-vehicle', controller.addVehicle)
}