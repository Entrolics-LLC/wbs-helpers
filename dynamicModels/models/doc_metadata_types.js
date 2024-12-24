'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DocMetaDataTypes extends Model {
        static associate(models) {
            // define association here
        }
    }
    DocMetaDataTypes.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false
            },
            type: DataTypes.STRING
        },
        {
            sequelize,
            modelName: `${schema}_doc_metadata_types`,
            tableName: 'doc_metadata_types',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DocMetaDataTypes;
};