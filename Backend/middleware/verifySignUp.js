const { Customer } = require('../sequelize')

checkWhetherDuplicateExist = (req, res, next) => {
    console.log(req.body)
    Customer.findOne({
        where: {
            Email: req.body.email
        }
    }).then(customer => {
        if(customer) {
            res.status(400).send({
                message: 'Uzytkownik o podanym emailu juz istnieje!'
            })
            return
        }
        next()
    })
    
}

const verifySignUp = {
    checkWhetherDuplicateExist: checkWhetherDuplicateExist
}

module.exports = verifySignUp