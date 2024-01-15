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
            owner_id: DataTypes.STRING,
            guest_id: DataTypes.STRING,
            email: DataTypes.STRING,
            name: DataTypes.STRING,
            access_token: DataTypes.ARRAY(DataTypes.STRING(5000)),
            role: DataTypes.STRING,
            token: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_accepted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
            time_zone: DataTypes.STRING
        },
        {
            sequelize,
            modelName: `${schema}_guests`,
            tableName: 'guests',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return User;
};
