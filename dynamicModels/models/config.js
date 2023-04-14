'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Config extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Config.init(
        {
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            config_type: DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_configs`,
            tableName: 'configs',
            schema: schema,
            createdAt: false,
            updatedAt: false
        });
    return Config;
};