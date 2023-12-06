'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DiSearchApp extends Model {
        static associate(models) {
            // define association here
        }
    }
    DiSearchApp.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            name: DataTypes.STRING,
            description: DataTypes.STRING(100000),
            app_type: DataTypes.STRING,
            prompt: DataTypes.STRING,
            prompt_type: DataTypes.STRING,
            instruction_id: DataTypes.STRING,
            file_url: DataTypes.STRING,
            is_deleted: DataTypes.BOOLEAN,
            updated_at: {
                type: DataTypes.DATE
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_disearch_apps`,
            tableName: 'disearch_apps',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DiSearchApp;
};