'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class PlanSubscribers extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PlanSubscribers.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            subscription_id: DataTypes.STRING,
            customer_id: DataTypes.STRING,
            product_id: DataTypes.STRING,
            plan_id: DataTypes.STRING,
            subscription_type: DataTypes.STRING,
            no_of_search: DataTypes.INTEGER,
            no_of_used_search: {
                type: DataTypes.FLOAT,
                defaultValue: 0
            },
            plan_amount: {
                type: DataTypes.FLOAT,
                defaultValue: 0
            },
            is_cancelled: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            cancelled_at: {
                type: DataTypes.DATE
            },
            expiry_at: {
                type: DataTypes.DATE
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
            modelName: `${schema}_plan_subscribers`,
            tableName: 'plan_subscribers',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return PlanSubscribers;
};
