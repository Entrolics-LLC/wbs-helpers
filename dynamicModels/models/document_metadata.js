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
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false
            },
            file_id: DataTypes.UUID,
            user_id: DataTypes.UUID,
            type_id: DataTypes.UUID,
            file_name: DataTypes.STRING,
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