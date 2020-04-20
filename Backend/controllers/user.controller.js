const { Customer } = require('../sequelize')

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
