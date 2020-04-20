module.exports = (sequelize, type) => {
    return sequelize.define('address', {
        AddressID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        City: {
            type: type.STRING(100),
            allowNull: false
        },
        FlatNumber: {
            type: type.INTEGER,
            allowNull: true
        },
        HomeNumber: {
            type: type.STRING(5),
            allowNull: false
        },
        Street: {
            type: type.STRING(100),
            allowNull: true
        },
        ZipCode: {
            type: type.STRING(10),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}