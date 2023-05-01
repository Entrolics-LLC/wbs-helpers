'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Allowed_Domian extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Allowed_Domian.init(
        {
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            domains: DataTypes.ARRAY(DataTypes.STRING)
        },
        {
            sequelize,
            modelName: `${schema}_allowed_domains`,
            tableName: 'allowed_domains',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return Allowed_Domian;
}