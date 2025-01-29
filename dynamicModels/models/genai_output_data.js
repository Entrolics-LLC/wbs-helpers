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
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            genai_id: DataTypes.STRING,
            name: DataTypes.STRING(255),
            size: DataTypes.INTEGER,
            length: DataTypes.INTEGER,
            mime_type: DataTypes.STRING(255),
            url: DataTypes.STRING(255),
            content: DataTypes.STRING(1098765),
            input_id: DataTypes.STRING,
            title: DataTypes.STRING(8675),
            description: DataTypes.STRING(1098765),
            version_number: DataTypes.INTEGER,
            status: DataTypes.STRING,
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
