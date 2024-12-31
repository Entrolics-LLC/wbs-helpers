'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GenaiOutputData extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    GenaiOutputData.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false
            },
            name: DataTypes.STRING(55),
            size: DataTypes.INTEGER,
            length: DataTypes.INTEGER,
            mime_type: DataTypes.STRING(255),
            url: DataTypes.STRING(255),
            content: DataTypes.STRING(8192),
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_genai_output_data`,
            tableName: 'genai_output_data',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return GenaiOutputData;
}
