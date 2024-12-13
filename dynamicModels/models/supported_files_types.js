'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class SupportedFileTypes extends Model {
        static associate(models) {
            // define association here
        }
    }
    SupportedFileTypes.init(
        {
            s_no: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            type: DataTypes.STRING,
            size: DataTypes.INTEGER,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            sequelize,
            modelName: `${schema}_supported_files_types`,
            tableName: 'supported_files_types',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return SupportedFileTypes;
};