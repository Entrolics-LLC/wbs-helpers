'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class RetentionConfig extends Model {
        static associate(models) {
            // define association here
        }
    }

    RetentionConfig.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            resource_type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            retention_days: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: `${schema}_retention_config`,
            tableName: 'retention_config',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return RetentionConfig;
};
