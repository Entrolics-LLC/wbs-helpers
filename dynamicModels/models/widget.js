'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Widget extends Model {
        static associate(models) {
            // define association here
        }
    }
    Widget.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            name: DataTypes.STRING,
            origin: DataTypes.STRING,
            api_key: DataTypes.STRING(1000),
            di_domains: DataTypes.ARRAY(DataTypes.STRING(1098765)),
            whitelist_domains: DataTypes.ARRAY(DataTypes.STRING(1098765)),
            is_deleted: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_widget`,
            tableName: 'widget',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Widget;
};