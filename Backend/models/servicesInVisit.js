module.exports = (sequelize, type) => {
    return sequelize.define('servicesinvisit', {
        ServicesInVisitID: {
            type: type.INTEGER(11),
            primaryKey: true
        },
        Id_visit: {
            type: type.INTEGER(11),
            allowNull: false
        },
        Id_service: {
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