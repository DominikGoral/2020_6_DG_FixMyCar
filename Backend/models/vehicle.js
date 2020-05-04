module.exports = (sequelize, type) => {
    return sequelize.define('vehicle', {
        VIN_Number: {
            type: type.STRING(17),
            primaryKey: true
        },
        VehicleName: {
            type: type.STRING(30),
            allowNull: false
        },
        VehicleModel: {
            type: type.STRING(20),
            allowNull: false
        },
        Version: {
            type: type.FLOAT(2, 1),
            allowNull: false
        },
        YearOfProduction: {
            type: type.INTEGER(11),
            allowNull: false
        },
        EngineCapacity: {
            type: type.INTEGER(11),
            allowNull: false
        },
        Fuel: {
            type: type.STRING(20),
            allowNull: false
        },
        Color: {
            type: type.STRING(20),
            allowNull: true
        },
        Type: {
            type: type.STRING(20),
            allowNull: false
        },
        Id_customer: {
            type: type.STRING(80),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}