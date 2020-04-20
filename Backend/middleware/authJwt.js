const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')
const { Customer, Mechanic } = require('../sequelize')

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token']
    console.log(token)
    if(!token) {
        return res.status(403).send({
            message: 'Brak tokenu'
        })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
            return res.status(401).send({
                message: 'Unathorized!'
            })
        }
        req.userId = decoded.id
        next()
    })
}

const authJwt = {
    verifyToken: verifyToken
}

module.exports = authJwt