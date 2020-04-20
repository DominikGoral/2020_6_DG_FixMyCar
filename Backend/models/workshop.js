module.exports = (sequelize, type) => {
    return sequelize.define('workshop', {
        NIP: {
            type: type.STRING(10),
            primaryKey: true,
            allowNull: false
        },
        WorkshopName: {
            type: type.STRING(255),
            allowNull: false
        },
        Category: {
            type: type.STRING(50),
            allowNull: false
        },
        Description: {
            type: type.TEXT,
            allowNull: true
        },
        Id_address: {
            type: type.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}