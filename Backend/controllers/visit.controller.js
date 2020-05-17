const { Visit ,Workshop, Customer, Vehicle } = require('../sequelize')
const { Op } = require('sequelize')

exports.allVisits = (req, res) => {
    Visit.findAll({
        where: {
            VisitDate: {
                [Op.gte]: req.query.day
            }, 
            Id_mechanic: req.query.userId
        }
    })
    .then(async visits => {
        var visitsVehicles = []
        for(let i in visits) {
            let vehicle = await Vehicle.findOne({
                where: {
                    VIN_Number: visits[i].dataValues.Id_vehicle
                }
            })
            visitsVehicles.push(vehicle)
        }
        let response = {
            visits: visits,
            vehicles: visitsVehicles
        }
        res.status(200).send(response)
    })
}