'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
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
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            avatar: DataTypes.STRING,
            password: DataTypes.STRING,
            auth_type: DataTypes.STRING,
            role:DataTypes.STRING,
            is_deleted:{ 
                type:DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_validated:{ 
                type:DataTypes.BOOLEAN
            },
            created_at: {
                type: DataTypes.DATE
            },
            last_login: {
                type: DataTypes.DATE
            },
            curr_login: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: 'users',
            schema: 'wbs',
            createdAt: false,
            updatedAt: false
        });
    return User;
};