const { authJwt } = require('../middleware')
const controller = require('../controllers/visit.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        )
        next()
    })

    app.get('/mechanic/visit/all', controller.allVisits)

    app.get('/mechanic/visit/:id', controller.oneVisit)
    app.delete('/mechanic/visit/:id', controller.deleteVisit)

}