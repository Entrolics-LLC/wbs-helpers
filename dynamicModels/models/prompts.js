'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Prompt extends Model {
        static associate(models) {
            // define association here
        }
    }
    Prompt.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            prompt: DataTypes.STRING,
            description: DataTypes.STRING(2000),
        },
        {
            sequelize,
            modelName: `${schema}_prompts`,
            tableName: 'prompts',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Prompt;
};