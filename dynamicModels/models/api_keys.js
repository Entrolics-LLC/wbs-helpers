'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class APIKey extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    APIKey.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            name: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_validated: {
                type: DataTypes.BOOLEAN
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            },
            expire_at: {
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: `${schema}_api_key`,
            tableName: 'api_key',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return APIKey;
};
