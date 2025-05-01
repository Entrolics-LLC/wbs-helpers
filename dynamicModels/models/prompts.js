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
            type: DataTypes.STRING,
            prompt: DataTypes.STRING.STRING(1098765),
            description: DataTypes.STRING(1098765),
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