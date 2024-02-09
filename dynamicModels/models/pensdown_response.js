'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class PensdownResponse extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PensdownResponse.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        proposal_id: DataTypes.STRING,
        section_number: DataTypes.STRING(10000),
        proposal_factors: DataTypes.STRING(10000),
        task_area: DataTypes.STRING(10000),
        section: DataTypes.STRING(10000),
        volume: DataTypes.STRING(10000),
        requirement: DataTypes.STRING(10000),
        requirement_heading: DataTypes.STRING(10000),
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.DATE
        },
    },
        {
            sequelize,
            modelName: `${schema}_pensdown_response`,
            tableName: 'pensdown_response',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return PensdownResponse;
};