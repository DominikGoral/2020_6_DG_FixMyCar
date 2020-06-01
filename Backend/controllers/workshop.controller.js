const { Workshop, Address, MechanicsInWorkshops } = require('../sequelize')
const { Op } = require('sequelize')

exports.allWorkshops = (req, res) => {
    Workshop.findAll()
    .then(workshops => {
        res.status(200).send(workshops)
    })
}

exports.oneWorkshop = async (req, res) => {
    let nextDay = new Date(req.query.day)
    nextDay.setDate(nextDay.getDate() + 1)
    const workshopData = await Workshop.findOne({
        where: {
            NIP: req.params.id
        }
    })
    const addressData = await Address.findOne({
        where: {
            AddressID: workshopData.Id_address
        }
    })
    const response = {
        workshopInfo: workshopData,
        addressInfo: addressData,
    }
    res.status(200).send(response)
}

exports.allMechanicsWorkshop = (req, res) => {
    MechanicsInWorkshops.findAll({
        where: {
            Id_mechanic: req.query.userId
        }
    })
    .then(async workshopsIds => {
        var workshopsData = []
        for(let i in workshopsIds) {
            let workshop = await Workshop.findOne({
                where: {
                    NIP: workshopsIds[i].dataValues.Id_workshop
                }
            })
            workshopsData.push(workshop)
        }
        res.status(200).send(workshopsData)
    }) 
        //console.log(workshopsData)
}

exports.addWorkshop = (req, res) => {
    Address.create({
        City: req.body.City,
        FlatNumber: req.body.FlatNumber,
        HomeNumber: req.body.HomeNumber,
        Street: req.body.Street,
        ZipCode: req.body.ZipCode
    })
    .then(address => {
        Workshop.create({
            NIP: req.body.NIP,
            WorkshopName: req.body.WorkshopName,
            Category: req.body.Category,
            Description: req.body.Description,
            Id_address: address.AddressID
        })
        .then(workshop => {
            MechanicsInWorkshops.create({
                Id_mechanic: req.body.UserId,
                Id_workshop: workshop.NIP,
                Role: 'Owner'
            })
            .then(response => {
                res.status(200).send(response)
            })
        })
    })
}