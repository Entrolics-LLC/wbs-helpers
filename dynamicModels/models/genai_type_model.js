'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GenaiTypeModel extends Model {
        static associate(models) {
            // define association here
        }
    }
    GenaiTypeModel.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            genai_type_id: DataTypes.STRING,
            model_id: DataTypes.STRING,
            is_default: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_genai_type_model`,
            tableName: 'genai_type_model',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return GenaiTypeModel;
};