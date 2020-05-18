const { Visit ,Workshop, Customer, Vehicle, Service, ServicesInVisit } = require('../sequelize')
const { Op } = require('sequelize')

exports.allVisits = (req, res) => {
    let nextDay = new Date(req.query.day)
    nextDay.setDate(nextDay.getDate() + 1)
    Visit.findAll({
        where: {
            VisitDate: {
                [Op.gte]: new Date(req.query.day),
                [Op.lte]: nextDay
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

takeServices = async (services) => {
    servicesData = []
    for(let i in services) {
        const serviceName = await Service.findOne({
            where: {
                ServiceID: services[i].dataValues.Id_service
            }
        })
        servicesData.push(serviceName)
    }
    return servicesData
}

exports.oneVisit = async (req, res) => {
    console.log('id wizyty: ' + req.params.id)
    const visit = await Visit.findOne({
        where: {
            VisitID: req.params.id
        }
    })
    const customer = await Customer.findOne({
        where: {
            Email: visit.Id_customer
        }
    })
    const workshop = await Workshop.findOne({
        where: {
            NIP: visit.Id_workshop
        }
    })
    const servicesInVisit = await ServicesInVisit.findAll({
        where: {
            Id_visit: req.params.id
        }
    })
    const services = await takeServices(servicesInVisit)
    res.status(200).send({
        visitInfo: visit,
        customerInfo: customer,
        workshopInfo: workshop,
        servicesInfo: services
    })
}