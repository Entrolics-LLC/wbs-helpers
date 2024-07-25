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
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            guest_id: DataTypes.STRING,
            email: DataTypes.STRING,
            name: DataTypes.STRING,
            organization_name: DataTypes.STRING,
            phone: DataTypes.STRING,
            country: DataTypes.STRING,
            zip_code: DataTypes.STRING,
            avatar: DataTypes.STRING,
            password: DataTypes.STRING,
            auth_type: DataTypes.STRING,
            access_token: DataTypes.ARRAY(DataTypes.STRING(5000)),
            reset_password_token: DataTypes.STRING(5000),
            role: DataTypes.STRING,
            token: DataTypes.STRING,
            subscription_id: DataTypes.STRING,
            plan_id: DataTypes.STRING,
            customer_id: DataTypes.STRING,
            payment_id: DataTypes.STRING,
            pensdown_role: DataTypes.STRING,
            vertexai: DataTypes.JSONB,
            screen_mode: {
                type: DataTypes.STRING,
                defaultValue: 'search_view'
            },
            search_quota: {
                type: DataTypes.FLOAT,
                defaultValue: 0
            },
            document_quota: {
                type: DataTypes.FLOAT,
                defaultValue: 0
            },
            total_search: {
                type: DataTypes.FLOAT,
                defaultValue: 0
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_approved: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_disabled: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_validated: {
                type: DataTypes.BOOLEAN
            },
            is_agreement_accepted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            },
            company_name: DataTypes.STRING,
            sub_domain: DataTypes.STRING,
            dev_mode: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            new_user: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            time_zone: DataTypes.STRING
        },
        {
            sequelize,
            modelName: `${schema}_users`,
            tableName: 'users',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return User;
};
