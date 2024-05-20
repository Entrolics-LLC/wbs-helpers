'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class SystemPrompt extends Model {
        static associate(models) {
            // define association here
        }
    }
    SystemPrompt.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            name: DataTypes.STRING,
            system_prompt: DataTypes.STRING(1098765),
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
            modelName: `${schema}_system_prompt`,
            tableName: 'system_prompt',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return SystemPrompt;
};