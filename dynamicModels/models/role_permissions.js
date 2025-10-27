'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class RolePermission extends Model {
        static associate(models) {
            // define association here (if needed)
        }
    }

    RolePermission.init(
        {
            role_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            permission_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: `${schema}_role_permissions`,
            tableName: 'role_permissions',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return RolePermission;
};