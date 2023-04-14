'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Deployment extends Model {
        static associate(models) {
            // define association here
        }
    }
    Deployment.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            app_name: DataTypes.STRING,
            app_logo: DataTypes.STRING,
            files_url: DataTypes.STRING,
            app_url: DataTypes.STRING,
            is_deleted: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            },
            user_id: DataTypes.STRING
        },
        {
            sequelize,
            modelName: `${schema}_deployments`,
            tableName: 'deployments',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Deployment;
};