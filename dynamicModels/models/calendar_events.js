'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Calendar_events extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Calendar_events.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        user_id: DataTypes.STRING,
        proposal_id: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING(100000),
        event_start: DataTypes.STRING,
        event_end: DataTypes.STRING,
        event_time: DataTypes.JSONB,
        contributors: DataTypes.ARRAY(DataTypes.STRING),
        all_day: DataTypes.BOOLEAN,
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
    },
        {
            sequelize,
            modelName: `${schema}_calendar_events`,
            tableName: 'calendar_events',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Calendar_events;
};