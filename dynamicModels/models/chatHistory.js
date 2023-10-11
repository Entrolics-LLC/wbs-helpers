'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class ChatHistory extends Model {
        static associate(models) {
            // define association here
        }
    }
    ChatHistory.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            session_id: DataTypes.STRING(1000),
            question: DataTypes.STRING(1000),
            result: DataTypes.STRING(1098765),
            prompt: DataTypes.STRING(9999),
            is_deleted: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_chat_history`,
            tableName: 'chat_history',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return ChatHistory;
};