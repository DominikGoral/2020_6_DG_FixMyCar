const Sequelize = require('sequelize')
//const ServiceModel = require('./models/service')
const CustomerModel = require('./models/customer')
const AddressModel = require('./models/address')
const MechanicModel = require('./models/mechanic')
const WorkshopModel = require('./models/workshop')
const VehicleModel = require('./models/vehicle')
const VisitModel = require('./models/visit')
const MechanicsInWorkshopModel = require('./models/mechanicsInWorkshop')
const ServiceModel = require('./models/service')
const ServicesInVisitModel = require('./models/servicesInVisit')

const sequelize = new Sequelize('fixmycar', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    
})

//const Service = ServiceModel(sequelize, Sequelize)
const Customer = CustomerModel(sequelize, Sequelize)
const Address = AddressModel(sequelize, Sequelize)
const Mechanic = MechanicModel(sequelize, Sequelize)
const Workshop = WorkshopModel(sequelize, Sequelize)
const Vehicle = VehicleModel(sequelize, Sequelize)
const Visit = VisitModel(sequelize, Sequelize)
const MechanicsInWorkshops = MechanicsInWorkshopModel(sequelize, Sequelize)
const Service = ServiceModel(sequelize, Sequelize)
const ServicesInVisit = ServicesInVisitModel(sequelize, Sequelize)

Address.hasMany(Customer, {
  foreignKey: 'Id_address'
})
Address.hasMany(Mechanic, {
  foreignKey: 'Id_address'
})
Address.hasMany(Workshop, {
  foreignKey: 'Id_address'
})

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
    //Service,
    Customer,
    Address,
    Mechanic,
    Workshop,
    Vehicle,
    Visit,
    MechanicsInWorkshops,
    Service,
    ServicesInVisit
}
