'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class chatTitle extends Model {
        static associate(models) {
            // define association here
        }
    }
    chatTitle.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            session_id: DataTypes.STRING,
            title: DataTypes.STRING(1098765),
            is_deleted: DataTypes.BOOLEAN,
            updated_at: {
                type: DataTypes.DATE
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_chat_title`,
            tableName: 'chat_title',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return chatTitle;
};