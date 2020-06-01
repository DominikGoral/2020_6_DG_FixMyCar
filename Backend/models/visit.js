module.exports = (sequelize, type) => {
    return sequelize.define('visit', {
        VisitID: {
            type: type.INTEGER(11),
            primaryKey: true
        },
        Id_workshop: {
            type: type.STRING(10),
            primaryKey: false
        },
        Id_customer: {
            type: type.STRING(80),
            allowNull: false
        },
        Id_vehicle: {
            type: type.STRING(17),
            allowNull: false
        },
        VisitDateStart: {
            type: type.DATE(),
            allowNull: false
        },
        VisitDescription: {
            type: type.TEXT,
            allowNull: false
        },
        VisitDateEnd: {
            type: type.DATE(),
            allowNull: false
        },
        TotalPrice: {
            type: type.DECIMAL(8, 2),
            allowNull: false
        },
        PaymentMethod: {
            type: type.STRING(20),
            allowNull: true
        },
        Id_mechanic: {
            type: type.STRING(80),
            allowNull: false
        },
        Id_customer: {
            type: type.STRING(80),
            allowNull: false
        },
        Done: {
            type: type.BOOLEAN,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}