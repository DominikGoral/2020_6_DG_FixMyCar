const { WorkshopOpenTime } = require('../sequelize')

exports.getWorkshopOpenHours = (req, res) => {
    console.log(req.params.id)
    WorkshopOpenTime.findOne({
        where: {
            Id_workshop: req.params.id
        }
    })
    .then(workshopopenhours => {
        res.status(200).send(workshopopenhours)
    })
}