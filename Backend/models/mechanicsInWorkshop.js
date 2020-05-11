module.exports = (sequelize, type) => {
    return sequelize.define('mechanicsinworkshop', {
        Id_mechanic: {
            type: type.STRING(80),
            primaryKey: true,
            allowNull: false
        },
        Id_workshop: {
            type: type.STRING(10),
            primaryKey: true,
            allowNull: false
        },
        Role: {
            type: type.ENUM('OWNER', 'EMPLOYEE'),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}