const { Service, OfferedServices } = require('../sequelize')

exports.getAllOfferedServices = (req, res) => {
    OfferedServices.findAll({ include: 
        [
            {
                model: Service
            }
        ],
        where: {
            Id_workshop: req.query.workshopId
        }
    })
    .then(offeredServices => {
        res.status(200).send(offeredServices)
    })
}
