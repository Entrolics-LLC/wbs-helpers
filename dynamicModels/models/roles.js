'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class Role extends Model {
        static associate(models) {
            // define association here (if needed)
        }
    }

    Role.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            scope: {
                type:DataTypes.STRING, //'global', 'organization', 'department' etc
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            sequelize,
            modelName: `${schema}_roles`,
            tableName: 'roles',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return Role;
};