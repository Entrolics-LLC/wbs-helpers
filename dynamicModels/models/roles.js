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
            organization_id: {
                type: DataTypes.STRING
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT
            },
            is_system_role: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
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
            updatedAt: false,
            indexes: [
                {
                    unique: true,
                    fields: ['organization_id', 'name']
                }
            ]
        }
    );

    return Role;
};