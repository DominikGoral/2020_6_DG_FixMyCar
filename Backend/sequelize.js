const Sequelize = require('sequelize')
const ServiceModel = require('./models/service')

const sequelize = new Sequelize('fixmycar', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    
})

const Service = ServiceModel(sequelize, Sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    })

    sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

module.exports = {
    Service
}
