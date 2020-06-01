const { verifySignUp } = require('../middleware')
const controller = require('../controllers/comment.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept'
        )
        next()
    })

    app.get('/comment/all', controller.getAllWorkshopComments)

    app.post('/comment/new-comment', controller.addComment)

    app.put('/comment/:id', controller.modifyComment)

    app.delete('/comment/:id', controller.deleteComment)

}