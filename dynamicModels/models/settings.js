'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes,schema) => {
    class Setting extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Setting.init(
        {
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            model: DataTypes.STRING(255),
            start_prompt: DataTypes.STRING(10000),
            end_prompt: DataTypes.STRING(10000),           
        },
        {
            sequelize,
            modelName: `${schema}_settings`,
            tableName: 'settings',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return Setting;
}
