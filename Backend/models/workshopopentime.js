module.exports = (sequelize, type) => {
    return sequelize.define('workshopopentime', {
        WorkshopOpenTimeID: {
            type: type.INTEGER(11),
            primaryKey: true,
            allowNull: false
        },
        Id_workshop: {
            type: type.STRING(10),
            allowNull: false
        },
        WorkStartTime: {
            type: type.STRING(5),
            allowNull: false
        },
        NumberOfWorkHours: {
            type: type.INTEGER(11),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}