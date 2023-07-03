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
            users_id: DataTypes.ARRAY(DataTypes.STRING),
            user_id: DataTypes.ARRAY(DataTypes.STRING),
            domains: DataTypes.ARRAY(DataTypes.STRING),
            name: DataTypes.STRING,
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
            modelName: `${schema}_data_contracts`,
            tableName: 'data_contracts',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return User;
};