module.exports = (sequelize, type) => {
    return sequelize.define('mechanic', {
        Email: {
            type: type.STRING(80),
            primaryKey: true,
            allowNull: false
        },
        FirstName: {
            type: type.STRING(40),
            allowNull: false
        },
        Surname: {
            type: type.STRING(40),
            allowNull: false
        },
        Id_address: {
            type: type.INTEGER,
            allowNull: false
        },
        Password: {
            type: type.STRING(100),
            allowNull: false
        },
        PhoneNumber: {
            type: type.STRING(12),
            allowNull: false
        },
        CreditCardNumber: {
            type: type.STRING(16),
            allowNull: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}