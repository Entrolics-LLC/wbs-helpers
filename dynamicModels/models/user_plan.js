'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Plans extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Plans.init(
        {
            plan_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            plan_name: DataTypes.STRING,
            no_of_guest: DataTypes.INTEGER,
            no_of_license: DataTypes.INTEGER,
            no_of_search: DataTypes.INTEGER,
            storage: DataTypes.INTEGER,
            support: DataTypes.BOOLEAN,
            plan_type: DataTypes.STRING,
            plan_description: DataTypes.STRING,
            is_available: DataTypes.BOOLEAN,
            features: DataTypes.ARRAY(DataTypes.JSONB),
            monthly_price: DataTypes.FLOAT,
            yearly_price: DataTypes.FLOAT,
            user_ids: DataTypes.ARRAY(DataTypes.STRING),
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_plans`,
            tableName: 'plans',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Plans;
};