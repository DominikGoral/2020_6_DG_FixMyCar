const { Vehicle, Visit } = require('../sequelize')

exports.allVehicles = (req, res) => {
    Vehicle.findAll({
        where: {
            Id_customer: req.query.userId
        }
    })
    .then(vehicles => {
        res.status(200).send(vehicles)
    })
}

exports.oneVehicle = (req, res) => {
    Vehicle.findOne({
        where: {
            VIN_Number: req.params.id
        }
    })
    .then(vehicle => {
        if(vehicle) {
            Visit.findAll({
                where: {
                    Id_vehicle: vehicle.VIN_Number
                }
            })
            .then(visits => {
                const vehicleInfo = {
                    vehicleData: vehicle,
                    visits: visits
                }
                res.status(200).send(vehicleInfo)
            })
        }
    })
    .catch(error => {
        res.send(error)
    })
}

exports.addVehicle = (req, res) => {
    Vehicle.create({
        VIN_Number: req.body.vin_Number,
        VehicleName: req.body.vehicleName,
        VehicleModel: req.body.vehicleModel,
        Version: req.body.version,
        YearOfProduction: req.body.yearOfProduction,
        EngineCapacity: req.body.engineCapacity,
        Fuel: req.body.fuel,
        Color: req.body.color,
        Type: req.body.type,
        Id_customer: req.body.userId
    }).then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.send(error)
    })
}