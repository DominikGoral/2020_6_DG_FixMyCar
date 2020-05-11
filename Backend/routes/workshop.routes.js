const { authJwt } = require('../middleware')
const controller = require('../controllers/workshop.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        )
        next()
    })

    app.get('/workshop/all', controller.allWorkshops)

    app.get(
        '/workshop/:id',
        controller.oneWorkshop
    )

    app.get('/mechanic/workshop/all', controller.allMechanicsWorkshop)
    app.post('/mechanic/workshop/add-new', controller.addWorkshop)
}