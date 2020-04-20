const { Address, Customer, Mechanic } = require('../sequelize')
const config = require('../config/auth.config')

var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

exports.signUp = (req, res) => {
    if(req.body.role == null) {
        Address.create({
            City: req.body.city,
            FlatNumber: req.body.flatNumber,
            HomeNumber: req.body.homeNumber,
            Street: req.body.street,
            ZipCode: req.body.zipCode
        })
        .then(address => {
            Customer.create({
                Email: req.body.email,
                FirstName: req.body.firstName,
                Surname: req.body.surname,
                Id_address: address.AddressID,
                Password: bcrypt.hashSync(req.body.password, 8),
                PhoneNumber: req.body.phoneNumber,
                CreditCardNumber: req.body.creditCardNumber
            })
            .then(customer => {
                res.send({ message: 'Rejestracja zakonczona pomyslnie!' })
            })
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
    } else {
        Address.create({
            City: req.body.city,
            FlatNumber: req.body.flatNumber,
            HomeNumber: req.body.homeNumber,
            Street: req.body.street,
            ZipCode: req.body.zipCode
        })
        .then(address => {
            Mechanic.create({
                Email: req.body.email,
                FirstName: req.body.firstName,
                Surname: req.body.surname,
                Id_address: address.AddressID,
                Password: bcrypt.hashSync(req.body.password, 8),
                PhoneNumber: req.body.phoneNumber,
                CreditCardNumber: req.body.creditCardNumber,
                Role: req.body.role
            })
            .then(mechanic => {
                res.send({ message: 'Rejestracja zakonczona pomyslnie!' })
            })
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
    }
    
}

exports.signIn = (req, res) => {
    var tokenExpiresIn = 32400
    var userType = ''
    Customer.findOne({
        where: {
            Email: req.body.email
        }
    })
    .then(customer => {
        if(customer) {
            userType = 'customer'
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                customer.Password
            )
    
            if(!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: 'Niepoprawne hasło!'
                })
            }
            
            var token = jwt.sign({ id: customer.Email }, config.secret, {
                expiresIn: tokenExpiresIn // 9 hours
            })
            return res.status(200).send({
                id: customer.Email,
                accessToken: token,
                expiresIn: tokenExpiresIn,
                userType: userType
            })
        } else {
            Mechanic.findOne({
                where: {
                    Email: req.body.email
                }
            }).then(mechanic => {
                if(mechanic) {
                    userType = 'mechanic'
                    var passwordIsValid = bcrypt.compareSync(
                        req.body.password,
                        mechanic.Password
                    )
            
                    if(!passwordIsValid) {
                        return res.status(401).send({
                            accessToken: null,
                            message: 'Niepoprawne hasło!'
                        })
                    }
            
                    var token = jwt.sign({ id: mechanic.Email }, config.secret, {
                        expiresIn: tokenExpiresIn // 9 hours
                    })
                    return res.status(200).send({
                        id: mechanic.Email,
                        accessToken: token,
                        expiresIn: tokenExpiresIn,
                        userType: userType
                    })
                } else {
                    return res.status(404).send({ message: 'Uzytkownik nie istnieje.' })
                }
            })
        }
    })
    .catch(err => {
        res.status(500).send({ message: err.message })
    })
}