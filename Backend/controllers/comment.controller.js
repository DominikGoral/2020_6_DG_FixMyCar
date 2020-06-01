const { Comment, Customer } = require('../sequelize')

exports.getAllWorkshopComments = (req, res) => {
    Comment.findAll({ include: 
        [
            {
                model: Customer
            }
        ],
        where: {
            Id_workshop: req.query.id_workshop
        }
    })
    .then(comments => {
        res.status(200).send(comments)
    })
}

exports.addComment = (req, res) => {
    Comment.create({
        Id_workshop: req.body.Id_workshop,
        Id_customer: req.body.Id_customer,
        CommentContent: req.body.CommentContent,
        Rate: req.body.Rate
    })
    .then(response => {
        res.status(200).send(response)
    })
}

exports.modifyComment = (req, res) => {
    Comment.update({
        CommentContent: req.body.CommentContent,
        Rate: req.body.Rate
    }, {
        where: {
            CommentID: req.params.id
        }
    })
    .then(response => {
        res.status(200).send(response)
    })
}

exports.deleteComment = (req, res) => {
    Comment.findOne({
        where: {
            CommentID: req.params.id
        }
    })
    .then(response => {
        response.destroy()
    })
}
