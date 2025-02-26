'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class SchedulerAuditLog extends Model {
        static associate(models) {
            // define association here
        }
    }

    SchedulerAuditLog.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            scheduler_type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            start_time: {
                type: DataTypes.DATE,
                allowNull: false
            },
            end_time: {
                type: DataTypes.DATE,
                allowNull: true
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false
            },
            total_records_processed_failure: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            total_records_processed_success: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            total_records_identified: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            error: {
                type: DataTypes.STRING(1024),
                allowNull: true
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
            modelName: `${schema}_scheduler_audit_log`,
            tableName: 'scheduler_audit_log',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return SchedulerAuditLog;
};
