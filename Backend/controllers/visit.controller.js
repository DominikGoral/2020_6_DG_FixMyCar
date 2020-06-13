const { Visit ,Workshop, Customer, Vehicle, Service, ServicesInVisit, MechanicsInWorkshops } = require('../sequelize')
const { Op } = require('sequelize')

exports.allVisits = (req, res) => {
    let nextDay = new Date(req.query.day)
    nextDay.setDate(nextDay.getDate() + 1)
    Visit.findAll({
        where: {
            VisitDateStart: {
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

exports.allWorkshopVisit = (req, res) => {
    let nextDay = new Date(req.query.day)
    nextDay.setDate(nextDay.getDate() + 1)
    Visit.findAll({
        where: {
            VisitDateStart: {
                [Op.gte]: new Date(req.query.day),
                [Op.lte]: nextDay
            }, 
            Id_workshop: req.query.workshop
        }
    })
    .then(response => {
        res.status(200).send(response)
    })
}

exports.allCustomerVisit = (req, res) => {
    Visit.findAll({
        where: { 
            Id_customer: req.query.id_customer
        }
    })
    .then(response => {
        res.status(200).send(response)
    })
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

exports.deleteVisit = async (req, res) => {
    const servicesInVisit = await ServicesInVisit.destroy({
        where: {
            Id_visit: req.params.id
        }
    })
    const visit = await Visit.destroy({
        where: {
            VisitID: req.params.id
        }
    })
    
}

exports.addNewVisit = async (req, res) => {
    const mechanicsInWorkshop = await MechanicsInWorkshops.findAll({
        where: {
            Id_workshop: req.body.Id_workshop,
            Role: 'Employee'
        }
    })
    mechanics = []
    for(let i = 0; i < mechanicsInWorkshop.length; i++) {
        mechanics.push(mechanicsInWorkshop[i].dataValues.Id_mechanic)
    }
    let numberOfMechanicsInWorkshop = mechanics.length
    const visitsFirstPart = await Visit.findOne({
        where: {
            VisitDateStart: {
                [Op.gte]: new Date(req.body.VisitDateStart),
                [Op.lte]: new Date(req.body.VisitDateEnd)
            }, 
            Id_workshop: req.body.Id_workshop
        }
    })
    const visitsSecondPart = await Visit.findOne({
        where: {
            VisitDateEnd: {
                [Op.gte]: new Date(req.body.VisitDateStart),
                [Op.lte]: new Date(req.body.VisitDateEnd)
            }, 
            Id_workshop: req.body.Id_workshop
        }
    })
    const visitsThirdPart = await Visit.findOne({
        where: {
            VisitDateStart: {
                [Op.lte]: new Date(req.body.VisitDateStart)
            },
            VisitDateEnd: {
                [Op.gte]: new Date(req.body.VisitDateEnd)
            }, 
            Id_workshop: req.body.Id_workshop
        }
    })
    let mechanicsSet = new Set()
    if(visitsFirstPart != null) {
        mechanicsSet.add(visitsFirstPart.dataValues.Id_mechanic)
    }
    if(visitsSecondPart != null) {
        mechanicsSet.add(visitsSecondPart.dataValues.Id_mechanic)
    }
    if(visitsThirdPart != null) {
        mechanicsSet.add(visitsThirdPart.dataValues.Id_mechanic)
    }
    let numberOfBusyMechanics = mechanicsSet.size
    if(numberOfBusyMechanics < numberOfMechanicsInWorkshop) {
        let availableMechanics = []
        for(let i = 0; i < mechanics.length; i++) {
            let mechanicFromWorkshop = mechanics[i]
            for(let busyMechanic of mechanicsSet) {
                if(busyMechanic !== mechanicFromWorkshop) {
                    availableMechanics.push(mechanicFromWorkshop)
                }
            }
        }

        Visit.create({
            Id_workshop: req.body.Id_workshop,
            Id_customer: req.body.Id_customer,
            Id_vehicle: req.body.Id_vehicle,
            VisitDateStart: req.body.VisitDateStart,
            VisitDescription: req.body.VisitDescription,
            VisitDateEnd: req.body.VisitDateEnd,
            TotalPrice: req.body.TotalPrice,
            PaymentMethod: req.body.PaymentMethod,
            Id_mechanic: 'aro.bocian111@gmail.com',
            Done: false
        })
        .then(response => {
            res.status(200).send(response)
        })
    } else {
        res.status(400).send("Wybierz inną datę")
    }
}