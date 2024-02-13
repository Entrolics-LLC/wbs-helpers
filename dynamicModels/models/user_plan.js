'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            customer_id: DataTypes.STRING,
            product_id: DataTypes.STRING,
            plan_name: DataTypes.STRING,
            no_of_guest: DataTypes.FLOAT,
            no_of_license: DataTypes.FLOAT,
            no_of_search: DataTypes.FLOAT,
            remaining_guest: DataTypes.FLOAT,
            remaining_license: DataTypes.FLOAT,
            plan_type: DataTypes.STRING,
            plan_amount: DataTypes.FLOAT,
            plan_description: DataTypes.STRING,
            plan_credits: DataTypes.FLOAT,
            is_deleted: {
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
            modelName: `${schema}_plans`,
            tableName: 'plans',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return User;
};
