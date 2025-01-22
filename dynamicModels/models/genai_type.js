'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GenaiType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    GenaiType.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            serial_number: DataTypes.INTEGER,
            title: DataTypes.STRING(255),
            type: DataTypes.STRING(255),
            description: DataTypes.STRING(8222),
            icon: DataTypes.STRING(255),
            is_conversation_view: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_enabled: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        },
        {
            sequelize,
            modelName: `${schema}_genai_type`,
            tableName: 'genai_type',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return GenaiType;
}
