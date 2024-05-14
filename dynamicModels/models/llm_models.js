'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Llm_models extends Model {
        static associate(models) {
            // define association here
        }
    }
    Llm_models.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            model_name: DataTypes.STRING,
            model_type: DataTypes.STRING,
            max_token: DataTypes.INTEGER,
            is_image_support: DataTypes.BOOLEAN,
            system_prompt: DataTypes.STRING,
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
            modelName: `${schema}_llm_models`,
            tableName: 'llm_models',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Llm_models;
};