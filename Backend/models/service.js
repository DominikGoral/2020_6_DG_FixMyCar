module.exports = (sequelize, type) => {
    return sequelize.define('Service', {
        ServiceID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
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