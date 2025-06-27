'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class BoostingRules extends Model {
        static associate(models) {
            // define association here
        }
    }
    BoostingRules.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            entity: DataTypes.STRING,
            boost_value: DataTypes.FLOAT,
            description: DataTypes.STRING,
            tooltip: DataTypes.STRING,
            filter_name: DataTypes.STRING,
            is_active: {
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
            modelName: `${schema}_boosting_rules`,
            tableName: 'boosting_rules',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return BoostingRules;
};