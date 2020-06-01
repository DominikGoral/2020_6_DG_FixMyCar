module.exports = (sequelize, type) => {
    return sequelize.define('comment', {
        CommentID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Id_workshop: {
            type: type.STRING(10),
            allowNull: false
        },
        Id_customer: {
            type: type.STRING(80),
            allowNull: true
        },
        CommentContent: {
            type: type.TEXT,
            allowNull: false
        },
        Rate: {
            type: type.INTEGER(1),
            allowNull: true
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}