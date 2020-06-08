const { authJwt } = require('../middleware')
const controller = require('../controllers/user.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        )
        next()
    })

    app.get('/api/test/all', controller.allAccess)

    app.get('/api/allusers', controller.allUsers)

    app.get(
        '/api/test/user',
        [authJwt.verifyToken],
        controller.userAccess
    )

    app.get(
        '/profile/:id',
        controller.showMyProfile
    )

    app.put('/me', controller.updateData)

    app.put('/me/update-password', controller.updatePassword)
}