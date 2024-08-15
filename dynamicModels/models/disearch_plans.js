'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class disearchPlans extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    disearchPlans.init(
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
            plan_descripition: DataTypes.STRING,
            is_available: DataTypes.BOOLEAN,
            features: DataTypes.ARRAY(DataTypes.JSONB),
            monthly_price: DataTypes.FLOAT,
            yearly_price: DataTypes.FLOAT,
            user_id: DataTypes.ARRAY(DataTypes.STRING),
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
            modelName: `${schema}_disearch_plans`,
            tableName: 'disearch_plans',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return disearchPlans;
};
