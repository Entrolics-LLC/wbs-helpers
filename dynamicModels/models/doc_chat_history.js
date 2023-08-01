'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DocumentChatHistory extends Model {
        static associate(models) {
            // define association here
        }
    }
    DocumentChatHistory.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            file_id: DataTypes.STRING,
            user_id: DataTypes.STRING,
            question: DataTypes.STRING,
            answer: DataTypes.STRING,
            is_deleted: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_doc_chat_history`,
            tableName: 'doc_chat_history',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DocumentChatHistory;
};