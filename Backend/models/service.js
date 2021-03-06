module.exports = (sequelize, type) => {
    return sequelize.define('service', {
        ServiceID: {
            type: type.INTEGER(11),
            primaryKey: true
        },
        ServiceName: {
            type: type.STRING(255),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}