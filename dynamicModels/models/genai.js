'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Genai extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Genai.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            genai_output_data_id: DataTypes.STRING,
            genai_type_id: DataTypes.STRING,
            name: DataTypes.STRING(55),
            description: DataTypes.STRING(8192),
            status: DataTypes.STRING(255),
            completed_at: {
                type: DataTypes.DATE
            },
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
            modelName: `${schema}_genai`,
            tableName: 'genai',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return Genai;
}
