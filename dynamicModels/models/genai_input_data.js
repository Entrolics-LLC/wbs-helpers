'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GenaiInputData extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    GenaiInputData.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            genai_id: DataTypes.STRING,
            type_id: DataTypes.STRING,
            host_name: DataTypes.STRING(255),
            guest_name: DataTypes.STRING(255),
            host_voice: DataTypes.STRING(255),
            guest_voice: DataTypes.STRING(255),
            model: DataTypes.STRING(255),
            url: DataTypes.STRING(255),
            question: DataTypes.STRING(255),
            version_number: DataTypes.INTEGER,
            image_size: DataTypes.STRING,
            additional_notes: DataTypes.STRING(8192),
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_genai_input_data`,
            tableName: 'genai_input_data',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return GenaiInputData;
}
