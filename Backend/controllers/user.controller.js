const { Customer, Address } = require('../sequelize')
var bcrypt = require('bcryptjs')

exports.updatePassword = (req, res) => {
    var passwordIsValid = bcrypt.compareSync(
        req.body.oldPassword,
        req.body.password
    )
    if(!passwordIsValid) {
        res.status(200).send({ toastType: 'error', message: 'Stare hasło jest niepoprawne!'})
    } else {
        Customer.update({
            Password: bcrypt.hashSync(req.body.newPassword, 8)
        }, {
            where: {
                Email: req.body.userId
            }
        })
        .then(response => {
            res.status(200).send({ toastType: 'success', message: 'Hasło zostało zaktualizowane!' })
        })
    }
}

exports.allAccess = (req, res) => {
    res.status(200).send('Dostep publiczny')
}

exports.userAccess = (req, res) => {
    res.status(200).send('Dostep dla zalogowanych uzytkownikow')
}

exports.allUsers = (req, res) => {
    Customer.findOne({
        where: {
            Surname: 'Nowak'
        }
    })
    .then(customer => {
        res.status(200).send(customer)
    })
}

exports.showMyProfile = (req, res) => {
    console.log(req.params.id)
    Customer.findOne({
        where: {
            Email: req.params.id
        }
    })
    .then(customer => {
        if(customer) {
            Address.findOne({
                where: {
                    AddressID: customer.Id_address
                }
            })
            .then(address => {
                console.log(customer)
                const profileData = {
                    customerData: customer,
                    addressData: address
                }
                res.status(200).send(profileData)
            })
        }
    })
    .catch(err => {
        res.status(401).send({ message: 'Zaloguj się' })
    })
}

exports.updateData = (req, res) => {
    Customer.update({
        Email: req.body.email,
        FirstName: req.body.firstName,
        Surname: req.body.surname,
        Id_address: address.AddressID,
        Password: bcrypt.hashSync(req.body.password, 8),
        PhoneNumber: req.body.phoneNumber,
        CreditCardNumber: req.body.creditCardNumber
    },
    {
        where: {
            Email: req.body.email
        }
    })
    .then(response => {
        Customer.findOne({
            where: {
                Email: req.body.email
            }
        })
        .then(customer => {
            Address.update({
                City: req.body.city,
                Street: req.body.street,
                HomeNumber: req.body.homeNumber,
                FlatNumber: req.body.flatNumber,
                ZipCode: req.body.zipCode
            },
            {
                where: {
                    AddressID: customer.Id_address
                }
            })
            .then(
                res.status(200).send({ message: 'Zaktualizowano' })
            )
        })
    })
}