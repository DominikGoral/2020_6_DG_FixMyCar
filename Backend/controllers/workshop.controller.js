const { Workshop, Address } = require('../sequelize')

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
        if(workshop) {
            Address.findOne({
                where: {
                    AddressID: workshop.Id_address
                }
            })
            .then(address => {
                const workshopData = {
                    workshopInfo: workshop,
                    addressInfo: address 
                }
                res.status(200).send(workshopData)
            })
        }
    })
    .catch(error => {
        res.send(error)
    })
}