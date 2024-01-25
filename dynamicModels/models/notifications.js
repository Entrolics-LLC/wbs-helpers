'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Notifications extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Notifications.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        user_id: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        info: DataTypes.STRING,
        route: DataTypes.STRING,
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_pensdown: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }
    },
        {
            sequelize,
            modelName: `${schema}_notifications`,
            tableName: 'notifications',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Notifications;
};