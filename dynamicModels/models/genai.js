'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GENAI extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    GENAI.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.UUID,
            genai_output_data_id: DataTypes.UUID,
            genai_type_id: DataTypes.UUID,
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
    return GENAI;
}
