'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class ReminderLogs extends Model {
        static associate(models) {
            // define association here if needed
        }
    }

    ReminderLogs.init(
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
            plan_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            days_left: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'pending'
            },
            sent_at: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: `${schema}_reminder_logs`,
            tableName: 'reminder_logs',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return ReminderLogs;
};
