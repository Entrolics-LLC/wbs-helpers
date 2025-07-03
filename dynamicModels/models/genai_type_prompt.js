'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GenaiTypePrompt extends Model {
        static associate(models) {
            // define association here
        }
    }
    GenaiTypePrompt.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            genai_type_id: DataTypes.STRING,
            category: DataTypes.STRING,
            model_id: DataTypes.STRING,
            name: DataTypes.STRING,
            prompt: DataTypes.STRING(999999),
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
            modelName: `${schema}_genai_type_prompt`,
            tableName: 'genai_type_prompt',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return GenaiTypePrompt;
};