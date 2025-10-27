'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class Permission extends Model {
        static associate(models) {
            // define association here (if needed)
        }
    }

    Permission.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true
            },
            description: {
                type: DataTypes.TEXT
            }
        },
        {
            sequelize,
            modelName: `${schema}_permissions`,
            tableName: 'permissions',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return Permission;
};