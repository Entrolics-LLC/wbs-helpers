'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DocumentChat extends Model {
        static associate(models) {
            // define association here
        }
    }
    DocumentChat.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            file_id: DataTypes.STRING,
            user_id: DataTypes.STRING,
            document_url: DataTypes.STRING,
            is_deleted: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_doc_chat`,
            tableName: 'doc_chat',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DocumentChat;
};