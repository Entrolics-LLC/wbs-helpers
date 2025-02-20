'use strict';
const { values } = require('lodash');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DocumentMetaData extends Model {
        static associate(models) {
            // define association here
        }
    }
    DocumentMetaData.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            file_id: DataTypes.STRING,
            user_id: DataTypes.STRING,
            type_id: DataTypes.STRING,
            file_name: DataTypes.STRING(4096),
            values: DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_document_metadata`,
            tableName: 'document_metadata',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DocumentMetaData;
};