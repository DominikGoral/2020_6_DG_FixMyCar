module.exports = (sequelize, type) => {
    return sequelize.define('offeredservices', {
        Id_service: {
            type: type.INTEGER(11),
            primaryKey: true,
            allowNull: false
        },
        Id_workshop: {
            type: type.STRING(10),
            primaryKey: true,
            allowNull: false
        },
        Price: {
            type: type.FLOAT(8, 2),
            allowNull: false
        },
        ServiceDurationTime: {
            type: type.STRING(60),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}