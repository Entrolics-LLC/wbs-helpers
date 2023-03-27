'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Region extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Region.init(
        {
            region: DataTypes.STRING,
            is_available: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'regions',
            schema: 'admin',
            createdAt: false,
            updatedAt: false
        });
    return Region;
};