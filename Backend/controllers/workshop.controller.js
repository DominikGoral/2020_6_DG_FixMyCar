const { Workshop } = require('../sequelize')

exports.allWorkshops = (req, res) => {
    Workshop.findAll()
    .then(workshops => {
        res.status(200).send(workshops)
    })
}

exports.oneWorkshop = (req, res) => {
    Workshop.findOne({
        where: {
            NIP: req.params.id
        }
    })
    .then(workshop => {
        res.status(200).send(workshop.dataValues)
    })
}