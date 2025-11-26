'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class UsersGroup extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    UsersGroup.init(
        {
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            group_id: DataTypes.STRING,
            group_assign_by: DataTypes.STRING,

        },
        {
            sequelize,
            modelName: `${schema}_users_group`,
            tableName: 'users_group',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return UsersGroup;
};