module.exports = (sequelize, type) => {
    return sequelize.define('visit', {
        Id_workshop: {
            type: type.STRING(10),
            primaryKey: true
        },
        Id_customer: {
            type: type.STRING(80),
            allowNull: false
        },
        Id_vehicle: {
            type: type.STRING(17),
            allowNull: false
        },
        VisitDate: {
            type: type.DATE(),
            allowNull: false
        },
        VisitDescription: {
            type: type.TEXT,
            allowNull: false
        },
        VisitDurationTime: {
            type: type.STRING(60),
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
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}